import { NextResponse } from "next/server";

type BrevoEmailPayload = {
  sender: { name: string; email: string };
  to: { email: string; name?: string }[];
  replyTo?: { email: string; name: string };
  subject: string;
  htmlContent: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, sujet, message, captchaToken } = body;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
    
    // Vérification des données requises
    if (!captchaToken) {
      return NextResponse.json({ success: false, message: "Token manquant." }, { status: 400 });
    }
    if (!BREVO_API_KEY || !RECAPTCHA_SECRET) {
      throw new Error("Configuration serveur manquante.");
    }

    // 1. Vérification du token auprès de Google (avec encodage sécurisé)
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

    // 2. Préparation des e-mails Brevo
    const emailExpediteur = "contact@aurelienduberville.fr";

    // Amélioration : on capture TOUS les types de sauts de ligne (Windows \r\n et Mac/Linux \n)
    const messageFormate = message.replace(/\r?\n/g, "");

    // E-mail pour TOI (L'administrateur)
    const emailForAdmin = {
      sender: { name: "Page Contact", email: emailExpediteur },
      to: [{ email: emailExpediteur, name: "Aurélien Duberville" }],
      subject: `Nouveau message de contact : ${sujet}`,
      htmlContent: `
        
          Nouveau message depuis le formulaire
          
          
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

    // Fonction pour envoyer à Brevo
    const sendBrevoEmail = async (payload: BrevoEmailPayload) => {
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

    // 3. Envoi simultané des deux e-mails
    await Promise.all([
      sendBrevoEmail(emailForAdmin),
      sendBrevoEmail(emailForClient)
    ]);

    return NextResponse.json({ success: true, message: "Emails envoyés avec succès" });

  } catch (error) {
    console.error("🔴 ERREUR SERVEUR GLOBALE :", error);
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json(
      { success: false, message: "Détail de l'erreur : " + message },
      { status: 500 }
    );
  }
}