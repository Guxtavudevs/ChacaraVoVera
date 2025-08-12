(function () {
  // Atualiza o ano no rodapé
  const anoSpan = document.getElementById('ano');
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }

  // Menu mobile
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Lightbox
  const gallery = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox ? lightbox.querySelector('img') : null;
  const close = document.querySelector('.close-lightbox');

  if (gallery.length && lightbox && lbImg) {
    gallery.forEach(img => {
      img.addEventListener('click', () => {
        lbImg.src = img.src;
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });
  }

  if (close) {
    close.addEventListener('click', () => {
      lightbox.setAttribute('aria-hidden', 'true');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Formulário -> WhatsApp
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = form.querySelector('[name="nome"]').value.trim();
      const data = form.querySelector('[name="data"]').value;
      const msg = form.querySelector('[name="msg"]').value.trim();

      const texto = `Olá, meu nome é ${nome}. Gostaria de reservar para a data ${data}. Mensagem: ${msg}`;
      const numero = '5515996122297'; // Ex: 55DDDNUMERO
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

      alert('Mensagem enviada! Vamos abrir o WhatsApp para finalizar.');
      window.open(url, '_blank');

      form.reset();
    });

    // Atalho: apertar "W" abre WhatsApp
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'w') {
        const zapBtn = document.getElementById('whatsapp-btn');
        if (zapBtn) zapBtn.click();
      }
      
    });
  }
})();