const icon_menu = document.querySelector('h3.button');
const menu = document.querySelector('ul.menu-mobile');
icon_menu.addEventListener('click', ()=> {
      if(menu.classList.contains('esconder')){
            menu.classList.remove('esconder');
            menu.classList.add('mostrar');
      }else{
            menu.classList.remove('mostrar');
            menu.classList.add('esconder');
      }
});

