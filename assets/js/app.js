const menuBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-panel')
let menuOpen = true;

menuBtn.addEventListener('click', () => {
    if (menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('nav-active');
        menuOpen = false;
    }else {
        menuBtn.classList.remove('open');
        nav.classList.remove('nav-active');
        menuOpen = true;
    }
})

