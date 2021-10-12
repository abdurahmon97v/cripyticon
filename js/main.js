let nav = document.querySelector('.nav');
let nav_list = document.querySelector('.nav__list');
let btn = document.querySelector('.main-header__btn');
let nav_btn = document.querySelector('.nav__link-btn');
let span = document.querySelector('.main-header')
let body = document.querySelector('body');
btn.addEventListener('click',function(){
  nav_btn.classList.toggle('btn');
  span.classList.toggle('viz');
  nav.classList.toggle('nav--height');
  nav_list.classList.toggle('open');
  body.classList.toggle('cler')
})