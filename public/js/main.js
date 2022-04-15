/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-menu');
    })
}
/*=============== HOME SWIPER ===============*/

const homeSwiper = new Swiper(".home-swiper",{

    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header');
    // when the scroll is greater than 50vh and scroll header to the header class
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
        console.log("Hello");
    }
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)


/*=============== NEW SWIPER ===============*/
const newSwiper = new Swiper(".new-swiper",{

    spaceBetween: 16,
    centeredSlides:true,
    slidesPerView:"auto",
    loop: true,
});


/*=============== SHOW LOGIN ===============*/
function login(){
    const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close');

    /*===== LOGIN SHOW =====*/
    /* Validate if constant exists */   

        if(loginButton){
            loginButton.addEventListener('click',()=>{
                login.classList.add('show-login');
            })
        }   
    /*===== LOGIN HIDDEN =====*/
    /* Validate if constant exists */
        if(loginClose){
            loginClose.addEventListener('click',()=>{
                login.classList.remove('show-login');
            })
        }
}


const loginButton = document.getElementById('login-button'),
      logout = document.getElementById('logout');

      if(logout){
          loginButton.addEventListener('click',()=>{
              logout.classList.toggle('show-logout');
          })
      }



