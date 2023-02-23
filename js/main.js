let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-adaptive');
let close = document.querySelector('.close__btn');

burger.addEventListener('click', () => {
    menu.classList.remove('hide');
})

close.addEventListener('click', () => {
    menu.classList.add('hide');
})