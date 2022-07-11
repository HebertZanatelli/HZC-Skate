let botaoMenu = document.querySelector('.cabecalho__menu');
let menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click',() =>{
    menu.classList.toggle('menu-lateral--ativo')
})