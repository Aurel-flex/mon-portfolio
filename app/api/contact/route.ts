import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, sujet, message, captchaToken } = body;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

    if (!BREVO_API_KEY || !RECAPTCHA_SECRET) {
      throw new Error("Configuration serveur manquante.");
    }

    // 1. Vérification du token auprès de Google
    const verifyReq = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${RECAPTCHA_SECRET}&response=${captchaToken}`,
    });
    
    const verifyRes = await verifyReq.json();
    
    if (!verifyRes.success) {
      return NextResponse.json({ success: false, message: "Validation reCAPTCHA échouée." }, { status: 400 });
    }

    // 2. Préparation des e-mails Brevo
    const emailExpediteur = "contact@aurelienduberville.fr";

    // 🌟 NOUVEAU : On transforme les sauts de ligne invisibles en balises HTML <br>
    // Le "/\n/g" signifie : "Cherche absolument TOUS les sauts de ligne dans le texte"
    const messageFormate = message.replace(/\n/g, "<br>");

    // E-mail pour TOI
    const emailForAdmin = {
      sender: { name: "Page Contact", email: emailExpediteur },
      to: [{ email: emailExpediteur, name: "Aurélien Duberville" }],
      subject: `Nouveau message de contact : ${sujet}`,
      htmlContent: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #000;">Nouveau message depuis le formulaire de contact</h2>
          <ul style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; list-style-type: none;">
            <li style="margin-bottom: 10px;"><strong>Nom :</strong> ${nom}</li>
            <li style="margin-bottom: 10px;"><strong>Email :</strong> ${email}</li>
            <li><strong>Sujet :</strong> ${sujet}</li>
          </ul>
          <h3 style="margin-top: 24px;">Message :</h3>
          <!-- 🌟 On utilise ici notre message bien formaté -->
          <div style="background-color: #f0f4f8; padding: 20px; border-radius: 8px; border-left: 4px solid #0056b3;">
            <p style="margin: 0;">${messageFormate}</p>
          </div>
        </div>
      `,
    };

    // E-mail pour LE CLIENT
    const emailForClient = {
      sender: { name: "Aurélien Duberville", email: emailExpediteur },
      replyTo: { email: emailExpediteur, name: "Aurélien Duberville" },
      to: [{ email: email }],
      subject: "Votre message a bien été envoyé",
      htmlContent: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6;">
          <p>Bonjour ${nom},</p>
          <p>Je vous confirme la bonne réception de votre message via mon formulaire de contact.</p>
          <p>Je vais en prendre connaissance et je reviens vers vous très rapidement.</p>
          <br/>
          <p>À bientôt,</p>
          <p><strong>Aurélien Duberville</strong></p>
        </div>
      `,
    };

    const sendBrevoEmail = async (payload: any) => {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi vers Brevo");
      }
      return response.json();
    };

    // 3. Envoi simultané des e-mails
    await Promise.all([
      sendBrevoEmail(emailForAdmin),
      sendBrevoEmail(emailForClient)
    ]);

    return NextResponse.json({ success: true, message: "Emails envoyés avec succès" });

  } catch (error: any) {
    console.error("🔴 ERREUR SERVEUR GLOBALE :", error);
    return NextResponse.json(
      { success: false, message: "Détail de l'erreur : " + (error.message || "Erreur inconnue") },
      { status: 500 }
    );
  }
}