const nodemailer = require('nodemailer');
const clean = (value, max = 4000) => String(value ?? '').replace(/[<>]/g, '').trim().slice(0, max);
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ok:false});
  }
  try {
    const input = req.body || {};
    const nombre = clean(input.nombre, 120);
    const modelo = clean(input.modelo, 160);
    const email = clean(input.email, 180);
    const telefono = clean(input.telefono, 60);
    const mensaje = clean(input.mensaje);
    if (!nombre || !email || !telefono || !mensaje || !input.privacidad) return res.status(400).json({ok:false});
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ok:false});
    const port = Number(process.env.SMTP_PORT || 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: String(process.env.SMTP_SECURE ?? 'true') === 'true',
      auth: {user: process.env.SMTP_USER, pass: process.env.SMTP_PASS}
    });
    await transport.sendMail({
      from: `"DysonPlus" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: 'Nueva consulta - DysonPlus Reparación Servicio Técnico en Vitoria',
      text: `Nombre: ${nombre}\nModelo: ${modelo || '-'}\nEmail: ${email}\nTeléfono: ${telefono}\n\n${mensaje}`
    });
    return res.status(200).json({ok:true});
  } catch (error) {
    console.error('Error al enviar consulta de DysonPlus', error);
    return res.status(500).json({ok:false});
  }
};
