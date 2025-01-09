document.addEventListener('DOMContentLoaded', function () {
    const botonesTema = document.querySelectorAll('[data-bs-theme-value]');

    function cambiarTema(tema) {
        document.body.setAttribute('data-bs-theme', tema);
    }
    const temaActual = localStorage.getItem('tema') || 'claro';
    cambiarTema(temaActual);
    botonesTema.forEach(boton => {
        boton.addEventListener('click', function () {
            const temaSeleccionado = this.getAttribute('data-bs-theme-value');
            localStorage.setItem('tema', temaSeleccionado); 
            cambiarTema(temaSeleccionado);
        });
    });
});
