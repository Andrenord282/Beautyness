

import * as flsFunctions from "./modules/checkWebp.js";

flsFunctions.isWebp();

const body = document.querySelector('body');
const btnBurger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header-right');

export const toggleBurger = () => {
    btnBurger.addEventListener('click', () =>{
        body.classList.toggle('fixed');
        btnBurger.classList.toggle('active');
        navMenu.classList.toggle('show');
    })
}


toggleBurger();