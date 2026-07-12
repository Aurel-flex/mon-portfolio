import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { servicePrincipal, sousChoix, email, message, captchaToken } = body;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

  if (!BREVO_API_KEY || !RECAPTCHA_SECRET) {
      throw new Error("Configuration serveur manquante (Brevo ou reCAPTCHA).");
    }
  const verifyReq = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${RECAPTCHA_SECRET}&response=${captchaToken}`,
    });
    
    const verifyRes = await verifyReq.json();
    // Vérification du token reCAPTCHA
    if (!verifyRes.success) {
      throw new Error("La validation reCAPTCHA a échoué.");
    }

    // Définition de l'expéditeur unique et authentifié
    const emailExpediteur = "contact@aurelienduberville.fr";

    // 1. Préparation de l'e-mail pour TOI (Réception du devis)
    const emailForAdmin = {
      sender: { name: "Site Portfolio", email: emailExpediteur },
      to: [{ email: emailExpediteur, name: "Aurélien Duberville" }],
      subject: `🔥 Nouvelle demande de devis : ${servicePrincipal}`,
      htmlContent: `
        <h2>Nouvelle demande de projet</h2>
        <ul>
          <li><strong>Service demandé :</strong> ${servicePrincipal}</li>
          <li><strong>Détail/Format :</strong> ${sousChoix}</li>
          <li><strong>Email du client :</strong> ${email}</li>
        </ul>
        <h3>Message :</h3>
        <p>${message}</p>
      `,
    };

    // 2. Préparation de l'e-mail d'accusé de réception pour le CLIENT
    const emailForClient = {
      sender: { name: "Aurélien Duberville", email: emailExpediteur },
      replyTo: { email: emailExpediteur, name: "Aurélien Duberville" },
      to: [{ email: email }],
      subject: "Votre demande de devis est bien prise en compte",
      htmlContent: `
        <p>Bonjour,</p>
        <p>Je vous confirme la bonne réception de votre demande concernant : <strong>${servicePrincipal}</strong>.</p>
        <p>Je vais étudier votre projet et je reviens vers vous rapidement.</p>
        <p>À très bientôt,</p>
        <p><strong>Aurélien Duberville</strong></p>
      `,
    };

 // 3. Fonction d'envoi avec mouchard de succès
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
        const errorData = await response.json();
        console.error("🔴 Erreur API Brevo détaillée:", errorData);
        throw new Error("Erreur lors de l'envoi vers Brevo");
      }
      
      // 🌟 NOUVEAU : On lit la réponse de Brevo et on l'affiche dans le terminal !
      const responseData = await response.json();
      console.log(`✅ Succès ! L'e-mail pour ${payload.to[0].email} a bien été accepté par Brevo.`);
      return responseData;
    };

    // 4. Envoi simultané
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