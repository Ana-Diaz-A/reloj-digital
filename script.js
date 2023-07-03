const $tiempo = document.querySelector('.tiempo'); //CONSTANTE

function digitalClock(){ //FUNCIÓN PARA OBTENER LA HORA
    let reloj = new Date(),
    date = reloj.getDate(),
    month = reloj.getMonth(),
    year = reloj.getFullYear(),
    day = reloj.getDay();


    let timeString = reloj.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

}
setInterval(() => {
    digitalClock()
}, 1000);