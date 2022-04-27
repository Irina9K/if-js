const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.nav');
burger.addEventListener('click', toggleMenu);
function toggleMenu() {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
}
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu() {
  menu.classList.remove('    active');
  burger.classList.remove('active');
}
