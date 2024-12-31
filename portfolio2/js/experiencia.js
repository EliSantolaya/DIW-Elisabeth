function mostrarDetalles(cargo, empresa, localizacion, descripcion, mapaUrl) {
    const detallesGeneral = document.getElementById('detalles-general');

    detallesGeneral.innerHTML = `
        <div class="detalles-layout">
            <div class="detalles-imagen">
                <iframe src="${mapaUrl}" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="detalles-texto">
                <h3>${cargo}</h3>
                <p><strong>Empresa:</strong> ${empresa}</p>
                <p><strong>Localización:</strong> ${localizacion}</p>
                <p>${descripcion}</p>
            </div>
        </div>
    `;
    detallesGeneral.classList.add('show');
}

const currentPage = window.location.pathname;

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    if (currentPage.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});