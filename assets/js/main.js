// Utilidades de UI: intersección para revelar y utilidades del formulario
(function () {
  const onIntersect = (entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    }
  };

  const observer = new IntersectionObserver(onIntersect, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15,
  });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Año en footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Formulario de contacto
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  // Configuración opcional de EmailJS
  // 1) Crea una cuenta en https://www.emailjs.com/
  // 2) Añade tu Service ID, Template ID y Public Key aquí o como data-attrs en el form
  const EMAILJS_ENABLED = false; // cambia a true cuando configures tus IDs
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  async function sendViaEmailJS(data) {
    if (!window.emailjs) throw new Error('EmailJS no cargado');
    emailjs.init(EMAILJS_PUBLIC_KEY);
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data);
  }

  function mailtoFallback(data) {
    const subject = encodeURIComponent(`Contacto desde portafolio: ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\nDe: ${data.name} <${data.email}>`);
    window.location.href = `mailto:julianatorresmorales@tdea.edu.co?subject=${subject}&body=${body}`;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());
      status.textContent = 'Enviando…';
      try {
        if (EMAILJS_ENABLED) {
          await sendViaEmailJS(data);
        } else {
          mailtoFallback(data);
        }
        status.textContent = '¡Mensaje preparado! Si no ves tu cliente de correo, escríbeme directamente.';
        form.reset();
      } catch (err) {
        console.error(err);
        status.textContent = 'No se pudo enviar. Inténtalo de nuevo o usa el correo directo.';
      }
    });
  }
})();

