(function(){
  // ano no rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();

  // menu toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menuBtn && menuBtn.addEventListener('click', ()=>{nav.classList.toggle('open')});

  // gallery lazy load + lightbox
  const gallery = document.querySelectorAll('.gallery img');
  gallery.forEach(img=>{
    // lazy-load
    const src = img.getAttribute('data-src');
    if(src){img.src = src}

    img.addEventListener('click', ()=>{
      const lightbox = document.getElementById('lightbox');
      const lbImg = lightbox.querySelector('img');
      lbImg.src = img.src;
      lightbox.setAttribute('aria-hidden','false');
    });
  });

  // fechar lightbox
  const lightbox = document.getElementById('lightbox');
  const close = document.querySelector('.close-lightbox');
  close.addEventListener('click', ()=>{lightbox.setAttribute('aria-hidden','true');});
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) lightbox.setAttribute('aria-hidden','true'); });

  // formulário (simples - sem backend)
  const form = document.querySelector('.form');
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato pelo WhatsApp.');
    form.reset();
  });

  document.addEventListener('keydown', (e)=>{ if(e.key.toLowerCase()==='w'){ document.getElementById('whatsapp-btn').click(); } });

  form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const data = form.data.value;
  const msg = form.msg.value.trim();
  const texto = `Olá, meu nome é ${nome}. Gostaria de reservar para a data ${data}. Mensagem: ${msg}`;
  const numero = '5515996122297'; // Ex: 5511999999999
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank');
});
})();

