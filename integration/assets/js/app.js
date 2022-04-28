let app = {

    init(){
        app.addEventListener();
        console.log('app in fire 🔥 ')
    },

    addEventListener(){
        const navToggleElement = document.querySelector('.nav_burger');
        navToggleElement.addEventListener('click', app.toggleNav)
    },

    toggleNav(){
        const navBurgerElement = document.querySelector('.nav')
        navBurgerElement.classList.toggle('open')

    }


}

document.addEventListener('DOMContentLoaded',app.init) 