const ubicacion = document.querySelector('.menu-ubi');
const cardUbicacion = document.querySelector('.card');
const cerrar = document.querySelector('.icon-close');

ubicacion.addEventListener('click', function() {
    cardUbicacion.style.opacity = "1";
    cardUbicacion.style.zIndex = "2";
});

cerrar.addEventListener('click', function() {
    cardUbicacion.style.opacity = "0";
    cardUbicacion.style.zIndex = "-1";
});
