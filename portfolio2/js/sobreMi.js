const tarjetasHabilidad = document.querySelectorAll('.tarjeta-habilidad');
let tarjetaActual = 0;

function actualizarTarjetas(direccion) {
    tarjetasHabilidad[tarjetaActual].classList.remove('active');

    if (direccion === 'next') {
        tarjetaActual = (tarjetaActual + 1) % tarjetasHabilidad.length;
    } else if (direccion === 'prev') {
        tarjetaActual = (tarjetaActual - 1 + tarjetasHabilidad.length) % tarjetasHabilidad.length;
    }

    tarjetasHabilidad[tarjetaActual].classList.add('active');
}

const tarjetasAptitud = document.querySelectorAll('.tarjeta-aptitud');
let tarjetaAptitudActual = 0;

function actualizarTarjetasAptitud(direccion) {
    tarjetasAptitud[tarjetaAptitudActual].classList.remove('active');

    if (direccion === 'next') {
        tarjetaAptitudActual = (tarjetaAptitudActual + 1) % tarjetasAptitud.length;
    } else if (direccion === 'prev') {
        tarjetaAptitudActual = (tarjetaAptitudActual - 1 + tarjetasAptitud.length) % tarjetasAptitud.length;
    }

    tarjetasAptitud[tarjetaAptitudActual].classList.add('active');
}

document.getElementById('prev-aptitudes').addEventListener('click', () => actualizarTarjetasAptitud('prev'));
document.getElementById('next-aptitudes').addEventListener('click', () => actualizarTarjetasAptitud('next'));

document.getElementById('prev').addEventListener('click', () => actualizarTarjetas('prev'));
document.getElementById('next').addEventListener('click', () => actualizarTarjetas('next'));
