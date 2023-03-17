let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-adaptive');
let closeBtn = document.querySelector('.close__btn');
let tabPages = document.querySelectorAll('.header-tab__general');
let tabTitles = document.querySelectorAll('.header-tab__title');

burger.addEventListener('click', () => {
    menu.classList.remove('hide');
    document.body.style.overflow = 'hidden';

})
menu.addEventListener('click', () => {
    menu.classList.add('hide');
    document.body.style.overflow = 'auto';
})

closeBtn.addEventListener('click', () => {
    menu.classList.add('hide');
    document.body.style.overflow = 'auto';
})

tabTitles.forEach(item => {
    item.addEventListener('click', () => {
        tabTitles.forEach(item => {
            item.classList.remove('tab-title-active');
        })
        item.classList.add('tab-title-active');
        tabPages.forEach(item => {
            item.classList.add('header-tab__disabled');
        })
        document.querySelector('#' + item.dataset.tab).classList.remove('header-tab__disabled');
    })
})