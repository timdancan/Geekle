const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

navbar.addEventListener('click', ()=> {
  menu.classList.toggle('menu_visiable')
})