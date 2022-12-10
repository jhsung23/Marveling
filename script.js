const topButton = document.querySelector('.move-top-button');

topButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

window.onscroll = () =>
  window.scrollY > 80 ? (topButton.style.opacity = 1) : (topButton.style.opacity = 0);
