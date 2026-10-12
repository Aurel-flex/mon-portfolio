const SITE_URL = "https://www.aurelienduberville.fr";
const VIOLET = "#6D28D9";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Mail de confirmation envoyé au prospect (formulaires contact et devis).
// Mise en page en tableaux + styles en ligne : seul format rendu correctement par Gmail/Outlook.
export function confirmationEmailHtml(nom?: string) {
  const salutation = nom?.trim() ? `Bonjour ${escapeHtml(nom.trim())},` : "Bonjour,";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Votre demande a bien été prise en compte</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f3ff;">
  <div style="display:none;max-height:0;overflow:hidden;">Votre demande a bien été reçue, je reviens vers vous très rapidement.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ff;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
        <tr>
          <td style="background-color:${VIOLET};padding:28px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0"><tr>
              <td style="padding-right:14px;"><img src="${SITE_URL}/icon.png" width="48" height="48" alt="AD" style="display:block;border-radius:10px;border:2px solid #ffffff;"></td>
              <td>
                <div style="color:#ffffff;font-size:20px;font-weight:bold;">Aurélien Duberville</div>
                <div style="color:#ddd6fe;font-size:14px;">Consultant numérique indépendant</div>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 32px 8px;color:#1f2937;font-size:16px;line-height:1.6;">
            <p style="margin:0 0 16px;">${salutation}</p>
            <p style="margin:0 0 16px;">Je vous confirme la bonne réception de votre demande. Je vais étudier les détails de votre projet avec attention.</p>
            <p style="margin:0 0 28px;">Je reviens vers vous <strong style="color:${VIOLET};">très rapidement</strong> pour discuter de la suite.</p>
            <table role="presentation" cellpadding="0" cellspacing="0"><tr>
              <td style="background-color:${VIOLET};border-radius:10px;">
                <a href="${SITE_URL}/projets" style="display:inline-block;padding:12px 24px;color:#ffffff;font-weight:bold;text-decoration:none;font-size:15px;">Découvrir mes réalisations</a>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 32px;color:#1f2937;font-size:16px;line-height:1.6;">
            <p style="margin:0;">À très bientôt,</p>
            <p style="margin:4px 0 0;font-weight:bold;color:${VIOLET};">Aurélien Duberville</p>
            <p style="margin:0;font-size:14px;color:#6b7280;">Stratégie, création et référencement de sites internet</p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;background-color:#faf5ff;border-top:1px solid #ede9fe;color:#6b7280;font-size:13px;line-height:1.5;">
            <a href="${SITE_URL}" style="color:${VIOLET};text-decoration:none;font-weight:bold;">aurelienduberville.fr</a> &nbsp;·&nbsp;
            <a href="mailto:contact@aurelienduberville.fr" style="color:${VIOLET};text-decoration:none;">contact@aurelienduberville.fr</a><br>
            Vous recevez ce message suite à votre demande sur mon site.
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
