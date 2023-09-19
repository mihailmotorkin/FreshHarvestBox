const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=> {
  menuMobile.classList.toggle('menu--open');
  menuBtn.classList.toggle('active');
});






Fancybox.bind("[data-fancybox]", {
  // Your custom options
});