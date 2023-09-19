let burger = document.querySelector('.burger');
let menu_burger = document.querySelector('.menu_burger');
burger.addEventListener('click', () => {
    menu_burger.classList.toggle('menu_burger');
})