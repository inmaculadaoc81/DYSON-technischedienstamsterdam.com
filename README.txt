DYSONSTATION DYSON REPARATIESERVICE IN NEDERLAND
================================================

Web de una sola página EN NEERLANDÉS (lang="nl") para DysonStation, servicio de
reparación Dyson con recogida y entrega en todo Países Bajos. HTML/CSS/JS estático
+ función serverless en Vercel.

Dominio: https://technischedienstamsterdam.com/
Marca: DysonStation Dyson Reparatieservice in Nederland
Nombre corto (og:site_name): DyStation – Amsterdam
Ficha de Google: https://maps.app.goo.gl/jGRjT7e9axkANZ59A
Mapa: iframe de la ficha "DysonStation Vacuum Repair", en la sección de contacto (ancho 100% vía CSS).

CONTACTO Y RECOGIDA
- Solo WhatsApp: +31 6 84 63 50 01 (no hay teléfono de llamada).
  · Hero: https://wa.me/+31684635001?text=Hallo DyStation, ik moet mijn Dyson laten repareren
  · Flotante, contacto y footer: https://wa.me/31684635001?text=Hallo DyStation, ik wil graag mijn Dyson laten repareren.
- Recogida: https://sis.redsys.es/tiendaWeb/item/NDk4Ozk= ("Ophalen en bezorgen in Nederland", 30 €),
  botón negro "Vraag nu je ophaalservice aan · 30 €".
- Horario: maandag t/m vrijdag 09:30–18:00.
- Política de privacidad: https://kelatos.com/privacy-policy/ (en español; no hay versión en neerlandés).

DIRECCIÓN: no se indica ninguna dirección ni taller; solo el servicio de ophalen en bezorgen.
El schema usa areaServed Nederland y addressCountry NL, sin calle ni ciudad.

IDIOMA
- Todo el texto visible, aria-label, meta, Open Graph (nl_NL) y schema están en neerlandés.
- Anclas en neerlandés: #home, #diensten, #hoe-het-werkt, #waarom, #contact, #faq, #over-dysonstation.
- Chatbot: interfaz en neerlandés (defaultLanguage nl); las respuestas dependen del flujo n8n compartido.
- api/contacto.js: el correo interno que recibe el equipo sigue en español.

ESTRUCTURA
- index.html · style.css, mobile-navigation.css, social-footer.css, cal-booking.css (base)
- dysonstation.css (identidad), dysonstation-header-hero.css (cabecera)
- dysonstation.js (menú, formulario, cookies "dysonstation_cookie_preference")
- dysonstation-n8n-chat.js / .css (chatbot) · api/contacto.js (SMTP) · img/ (SVG)

PALETA: naranja holandés ("oranje") + grafito + gris acero.
- Naranja #F36C00 · oscuro #D45A00 · muy oscuro #7A3300 (franja superior, sección oscura)
- Naranja de texto #B34700 para cursivas, enlaces e iconos sobre fondo claro
- Texto negro #17191C sobre botones naranjas
Excepciones: WhatsApp conserva su verde y YouTube su rojo corporativo.
En móvil (≤720px) no se muestran las ilustraciones laterales del hero.
