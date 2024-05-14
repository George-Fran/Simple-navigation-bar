let menu = document.querySelector('.menu');
let desplegar = document.querySelector('.desplegar');

menu.addEventListener('click', () => {
    desplegar.classList.toggle('desplegar');
    if(desplegar.classList.contains('desplegar')){
        menu.innerHTML = '<ion-icon name="grid-outline"></ion-icon>';
    } else{
        menu.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    }
});

let botones = document.querySelectorAll('ul > li > a');
botones.forEach(activar => {
    activar.addEventListener('click', () => {
        botones.forEach(quitar => {
            quitar.classList.remove('activo');
        });
        activar.classList.toggle('activo');
    });
});