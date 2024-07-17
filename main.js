const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const menu = document.getElementById('menus-list');

rightArrow.addEventListener( 'click', (e) =>{
    menu.scrollBy({
        left: 100,
        behavior: 'smooth'
      })
} )

leftArrow.addEventListener( 'click', (e) =>{
    menu.scrollBy({
        left: -100,
        behavior: 'smooth'
      })
} )