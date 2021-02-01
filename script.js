const burgerMenu = document.querySelector('.burger-menu');
const menuLinks = document.querySelector('.navbar-wrapper');
const menuDropdown = document.querySelector('.dropdown');


const toggleMenu = (e) =>{
   
    if(burgerMenu.classList.contains('fa-bars') || burgerMenu.classList.contains('fa-bars')){
        burgerMenu.classList.remove('fas');
        burgerMenu.classList.remove('fa-bars');
        burgerMenu.classList.add('fa');
        burgerMenu.classList.add('fa-times');
        menuLinks.classList.remove('sm-hide');
        menuDropdown.classList.remove('sm-hide');
    }else{
        burgerMenu.classList.remove('fa-times');
        burgerMenu.classList.remove('fa');
        burgerMenu.classList.add('fas');
        burgerMenu.classList.add('fa-bars');
        menuLinks.classList.add('sm-hide');
        menuDropdown.classList.add('sm-hide');
    }
}
burgerMenu.addEventListener('click', toggleMenu);