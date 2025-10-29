document.addEventListener('DOMContentLoaded', () => {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // burger menu
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }

  // Fallback para o GIF (se não carregar, exibe mensagem)
  const gif = document.querySelector('.hero-gif');
  if (gif) {
    gif.addEventListener('error', () => {
      console.warn('GIF não carregou. Exibindo fallback.');
      gif.style.display = 'none';
      // Opcional: Adicione uma imagem de fallback aqui, ex.: gif.parentNode.innerHTML = '<img src="fallback.jpg" alt="Fallback">';
    });
  }

  // Removido: Código de pausa em mobile, pois o GIF deve ficar sempre visível
});

// Função de formulário (se houver um form no futuro)
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const msg = document.getElementById('message')?.value.trim();
  if (!name || !email || !msg) {
    alert('Preencha todos os campos.');
    return false;
  }

  // Demo: simula envio
  console.log('Contato enviado:', { name, email, msg });
  alert('Mensagem enviada com sucesso — obrigado!');

  e.target.reset();
  return false;
}
