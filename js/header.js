/*  var swiper = new Swiper(".mySwiper", {
     slidesPerView: 3,
     spaceBetween: 30,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },

     navigation: {
       nextEl: ".btns",
       prevEl: ".swiper-button-prev",
     },
   }); */

let burgerMenu_btn = document.querySelector('.burger__menu')
let modal__bg = document.querySelector('.container')
let closes__btn = document.querySelector('.close')
let tel_menu = document.querySelector('.tel')
let tel_modal = document.querySelector('.clall_righ_modal')
let tel_close = document.querySelector('.tel_close')

burgerMenu_btn.onclick = () => {
  modal__bg.style.display = "block"
}

closes__btn.onclick = () => {
  modal__bg.style.display = "none"
}
tel_menu.onclick = () => {
  tel_modal.style.display = "block"
}

tel_close.onclick = () => {
  tel_modal.style.display = "none"
}

