const arrow = document.querySelectorAll('.t-header__button');

arrow.forEach(item => item.addEventListener('click', () => {
    item.classList.toggle('t-header__button_active');
    item.querySelector('.arrow').classList.toggle('arrow-top_active');
}));