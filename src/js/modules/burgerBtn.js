const btnBurger = document.querySelector('.burger-menu');

export const toggleBurger = () => {
    btnBurger.addEventListener('click', () =>{
        btnBurger.classList.toggle('active');
    })
}



