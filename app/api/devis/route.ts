import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { servicePrincipal, sousChoix, email, message, captchaToken } = body;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

    if (!captchaToken) {
      return NextResponse.json({ success: false, message: "Token reCAPTCHA manquant." }, { status: 400 });
    }
    if (!BREVO_API_KEY || !RECAPTCHA_SECRET) {
      throw new Error("Configuration serveur manquante.");
    }

    // 1. Vérification sécurisée du jeton Google
    const params = new URLSearchParams();
    params.append("secret", RECAPTCHA_SECRET);
    params.append("response", captchaToken);

    const verifyReq = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    
    const verifyRes = await verifyReq.json();
    
    if (!verifyRes.success) {
      return NextResponse.json(
        { success: false, message: "Validation reCAPTCHA échouée." }, 
        { status: 400 }
      );
    }

    // 2. Formatage du message pour gérer les sauts de ligne
    const messageFormate = message ? message.replace(/\r?\n/g, "") : "";
    const emailExpediteur = "contact@aurelienduberville.fr";

    // E-mail pour TOI (Réception du devis)
    const emailForAdmin = {
      sender: { name: "Page Devis", email: emailExpediteur },
      to: [{ email: emailExpediteur, name: "Aurélien Duberville" }],
      subject: `🔥 Nouvelle demande de devis : ${servicePrincipal}`,
      htmlContent: `
        
          Nouvelle demande de projet
          
            Service demandé : ${servicePrincipal}
            Détail/Format : ${sousChoix}
            Email du client : ${email}
          
          Message :
          
            ${messageFormate}
          
        
      `,
    };

// E-mail pour LE CLIENT
const emailForClient = {
  sender: { name: "Aurélien Duberville", email: emailExpediteur },
  replyTo: { email: emailExpediteur, name: "Aurélien Duberville" },
  to: [{ email: email }],
  subject: "Votre demande a bien été prise en compte",
  htmlContent: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
      <p style="margin-bottom: 15px;">Bonjour,</p>
      
      <p style="margin-bottom: 15px;">
        Je vous confirme la bonne réception de votre demande.<br/>
        Je vais étudier les détails de votre projet avec attention.
      </p>
      
      <p style="margin-bottom: 15px;">
        Je reviens vers vous très rapidement pour discuter de la suite.
      </p>
      
      <p style="margin-top: 30px;">
        À très bientôt,<br/>
        <strong>Aurélien Duberville</strong>
      </p>
    </div>
  `,
};

    // Fonction d'envoi simplifiée
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
      if (!response.ok) throw new Error("Erreur lors de l'envoi vers Brevo");
      return response.json();
    };

    await Promise.all([
      sendBrevoEmail(emailForAdmin),
      sendBrevoEmail(emailForClient)
    ]);

    return NextResponse.json({ success: true, message: "Emails envoyés avec succès" });

  } catch (error: any) {
    console.error("🔴 ERREUR SERVEUR GLOBALE :", error);
    return NextResponse.json(
      { success: false, message: "Erreur : " + (error.message || "Erreur inconnue") },
      { status: 500 }
    );
  }
}