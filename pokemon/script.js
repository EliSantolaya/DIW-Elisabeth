let intentos = 0;
let primeraCarta = '';
let segundaCarta = '';
let carta1Elemento = null;
let carta2Elemento = null;
let puntuacionAciertos = 0;
let puntuacionErrores = 0;

const mazoCartas = document.querySelectorAll('.carta');
const marcadorAciertos = document.getElementById('aciertos');
const marcadorErrores = document.getElementById('errores');
const botonReinicio = document.getElementById('reiniciar');

function actualizarMarcadores() {
    marcadorAciertos.textContent = puntuacionAciertos;
    marcadorErrores.textContent = puntuacionErrores;
}

function reiniciarPartida() {
    intentos = 0;
    primeraCarta = '';
    segundaCarta = '';
    carta1Elemento = null;
    carta2Elemento = null;
    puntuacionAciertos = 0;
    puntuacionErrores = 0;
    actualizarMarcadores();

    mazoCartas.forEach(carta => {
        carta.classList.remove('seleccionada', 'emparejada');
    });
}

botonReinicio.addEventListener('click', reiniciarPartida);

mazoCartas.forEach(carta => {
    carta.addEventListener("click", () => {
        if (carta.classList.contains('emparejada') || carta.classList.contains('seleccionada')) {
            return;
        }

        carta.classList.add('seleccionada');
        intentos++;

        if (intentos === 1) {
            primeraCarta = window.getComputedStyle(carta.querySelector('.anverso')).backgroundImage;
            carta1Elemento = carta;
        } else if (intentos === 2) {
            segundaCarta = window.getComputedStyle(carta.querySelector('.anverso')).backgroundImage;
            carta2Elemento = carta;

            if (primeraCarta === segundaCarta) {
                carta1Elemento.classList.add('emparejada');
                carta2Elemento.classList.add('emparejada');
                puntuacionAciertos++;
            } else {
                const cartaTemp1 = carta1Elemento;
                const cartaTemp2 = carta2Elemento;

                setTimeout(() => {
                    cartaTemp1.classList.remove('seleccionada');
                    cartaTemp2.classList.remove('seleccionada');
                }, 1000);

                puntuacionErrores++;
            }

            intentos = 0;
            primeraCarta = '';
            segundaCarta = '';
            carta1Elemento = null;
            carta2Elemento = null;

            actualizarMarcadores();
        }
    });
});
