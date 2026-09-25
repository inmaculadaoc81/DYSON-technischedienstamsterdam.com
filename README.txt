DYSONPLUS REPARACIÓN SERVICIO TÉCNICO EN VITORIA
================================================

Web de una sola página (HTML/CSS/JS estático + función serverless en Vercel)
para DysonPlus, servicio técnico y reparación de equipos Dyson con recogida
y entrega en Vitoria y área metropolitana.

Dominio: https://vitoriaserviciotecnico.com.es/
Marca: DysonPlus Reparación Servicio Técnico en Vitoria
Nombre corto (og:site_name): DyPlus – Vitoria
Ficha de Google: https://maps.app.goo.gl/Xfr1FR4jZDQwqnk69
Mapa: iframe de Google Maps de la ficha "DysonPlus Reparación Servicio Técnico",
insertado tal cual en la sección de contacto (ancho 100% vía CSS).

DATOS DE CONTACTO
- WhatsApp: +34 649 97 01 28.
- Teléfono: +34 910 05 48 17.
- Recogida a domicilio: https://sis.redsys.es/tiendaWeb/item/NDk4OzI=
  (botón "Solicita tu recogida ahora" del hero, siempre en negro).
- Horario: lunes a viernes de 09:30 a 18:00.
- Política de privacidad: https://kelatos.com/privacy-policy/.

DIRECCIÓN: no se muestra dirección postal. La web indica "Vitoria y área
metropolitana" y servicio de recogida y entrega; el taller está en Madrid.
Si se confirma una dirección en Vitoria, añadirla al hero, footer y JSON-LD.

ESTRUCTURA
- index.html: toda la página (hero, ventajas, reparación rápida, confianza,
  servicios, por qué elegirnos, cómo trabajamos, contacto + mapa, FAQ, texto
  SEO, footer, cookies y JSON-LD).
- style.css: base de la plantilla.
- mobile-navigation.css, social-footer.css, cal-booking.css: ajustes compartidos.
- dysonplus.css: identidad visual de la marca (una sola capa, sin
  sobrescrituras en cascada).
- dysonplus-header-hero.css: cabecera grafito con logotipo blanco.
- dysonplus.js: menú móvil (se cierra al pulsar un enlace), formulario y
  preferencias de cookies (clave localStorage "dysonplus_cookie_preference").
- dysonplus-n8n-chat.js / .css: chatbot n8n con webhook compartido del grupo
  y botón de respaldo.
- api/contacto.js: envío del formulario por SMTP (variables SMTP_HOST,
  SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS y CONTACT_EMAIL en Vercel).
- img/: isotipo, patrón e ilustraciones SVG de la marca.
- robots.txt y sitemap.xml apuntan a https://vitoriaserviciotecnico.com.es/.

PALETA: fucsia eléctrico, grafito y gris níquel (inspirada en las gamas premium níquel/fucsia).
- Primario fucsia #C2185B · oscuro #9C1248 · muy oscuro #5E0B2C
- Grafito (cabecera, footer, cookies, tarjeta de Google) #16161A
- Rosa claro #FF6FA8 para detalles sobre fondo oscuro (logotipo, destacados)
- Gris níquel #B8BCC4 en ilustraciones · fondos #F6F5F7
Excepciones: WhatsApp conserva su verde y YouTube su rojo corporativo.
En móvil (≤720px) no se muestran las ilustraciones laterales del hero.
