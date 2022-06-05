const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');
const $fechaEvento = 'Jun 9, 2022 20:30:00';


//Fecha a futuro
const countdownDate = new Date($fechaEvento).getTime();

let interval = setInterval (function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias, horas, minutos y segundos
    let days = Math.floor(distance / (1000 * 60 * 60 *24));
    let hours = Math.floor((distance % (1000 *60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60))/(1000));

    //Escribimos los resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML =('0' + seconds).slice(-2);

    if(distance < 0){
        let days =00;
        let hours = 00;
        let minutes = 00;
        let seconds = 00;
    
        //Escribimos los resultados
        $days.innerHTML = days;
        $hours.innerHTML = hours;
        $minutes.innerHTML = minutes;
        $seconds.innerHTML =('0' + seconds).slice(-2);
    }

},1000);
