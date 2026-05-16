const menuLabel = document.querySelector('.menu-label');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

menuLabel.addEventListener('click', () => {
  const current = window.getComputedStyle(nav).display;
  nav.style.display = current === 'none' ? 'block' : 'none';
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) {
    nav.style.display = '';
  }
});

gallery.addEventListener('click', (event) => {
  if (event.target.tagName !== 'IMG') return;
  modalImage.src = event.target.src;
  modal.showModal();
});

closeButton.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) {
    modal.close();
  }
});
