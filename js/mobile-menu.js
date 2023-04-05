{
  const menuBtn = document.querySelector('.header__mobile-btn');
  const menu = document.querySelector('.header__list');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__mobile-btn-add');
    menu.classList.toggle('open-menu');
  })
}