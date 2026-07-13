import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { nom, email, sujet, message, captchaToken } = body;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!captchaToken) {
      console.error("ERREUR : Le jeton est vide ou manquant !");
      return NextResponse.json({ success: false, message: "Token manquant." }, { status: 400 });
    }
    
    if (!BREVO_API_KEY || !RECAPTCHA_SECRET) {
      throw new Error("Configuration serveur manquante.");
    }

    // --- DEBUT DU DEBOGAGE GOOGLE ---

// 1. Vérification du token auprès de Google
// On utilise URLSearchParams pour encoder proprement le jeton géant
const params = new URLSearchParams();
params.append("secret", RECAPTCHA_SECRET);
params.append("response", captchaToken);

const verifyReq = await fetch("https://www.google.com/recaptcha/api/siteverify", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: params.toString(), // L'encodage parfait pour Google
});
    
    const verifyRes = await verifyReq.json();

    if (!verifyRes.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation reCAPTCHA échouée.",
          googleError: verifyRes["error-codes"] // On capture l'erreur exacte ici
        }, 
        { status: 400 }
      );
    }
    // --- FIN DU DEBOGAGE GOOGLE ---

    // 2. Préparation des e-mails Brevo
    const emailExpediteur = "contact@aurelienduberville.fr";

    // On transforme les sauts de ligne invisibles en balises HTML 
    const messageFormate = message.replace(/\n/g, "");

    // E-mail pour TOI
    const emailForAdmin = {
      sender: { name: "Page Contact", email: emailExpediteur },
      to: [{ email: emailExpediteur, name: "Aurélien Duberville" }],
      subject: `Nouveau message de contact : ${sujet}`,
      htmlContent: `
        
          Nouveau message depuis le formulaire de contact
          
            Nom : ${nom}
            Email : ${email}
            Sujet : ${sujet}
          
          Message :
          
            ${messageFormate}
          
        
      `,
    };

    // E-mail pour LE CLIENT
    const emailForClient = {
      sender: { name: "Aurélien Duberville", email: emailExpediteur },
      replyTo: { email: emailExpediteur, name: "Aurélien Duberville" },
      to: [{ email: email }],
      subject: "Votre message a bien été envoyé",
      htmlContent: `
        
          Bonjour ${nom},
          Je vous confirme la bonne réception de votre message via mon formulaire de contact.
          Je vais en prendre connaissance et je reviens vers vous très rapidement.
          
          À bientôt,
          Aurélien Duberville
        
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