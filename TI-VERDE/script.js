// small interactive behaviour: mobile menu and basic form handling
document.addEventListener('DOMContentLoaded', () => {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // burger menu
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger && burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  });

  // simple login stub (opens modal or logs to console)
  const btnLogin = document.getElementById('btnLogin');
  btnLogin && btnLogin.addEventListener('click', () => {
    alert('Aqui você pode abrir um modal de login ou redirecionar para a página de login.');
  });
});

// simple form submit handler
function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  if(!name || !email || !msg){
    alert('Preencha todos os campos.');
    return false;
  }

  // demo: simulate envio
  console.log('Contato enviado:', { name, email, msg });
  alert('Mensagem enviada com sucesso — obrigado!');

  e.target.reset();
  return false;
}
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");
  // Exemplo: pausar vídeo em dispositivos móveis
  if (window.innerWidth < 768) {
    video.pause();
    video.style.display = "none";
    // exiba imagem de fallback, etc
  }
});