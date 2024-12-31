function setupBook(libroId, descripcionId, detallesCurso) {
    const libro = document.getElementById(libroId);
    const paginas = libro.querySelectorAll('.paginas');
    const descripcion = document.getElementById(descripcionId);

    paginas.forEach(pagina => {
        pagina.addEventListener('click', () => {
            const pageId = pagina.id;

            if (pageId.toLowerCase().includes('contraportada')) {
                resetPages(paginas, descripcion, detallesCurso.portada);
                return;
            }
            pagina.classList.toggle('flipped');

            descripcion.innerHTML = `
                <h2>${detallesCurso[pageId]?.title || 'Página'}</h2>
                <p>${detallesCurso[pageId]?.description || 'Descripción no disponible.'}</p>
            `;
        });
    });
}

//Reiniciar todas las páginas
function resetPages(paginas, descripcion, descripcionPorDefecto) {
    paginas.forEach(pagina => pagina.classList.remove('flipped'));
    descripcion.innerHTML = `
        <h2>${descripcionPorDefecto.title}</h2>
        <p>${descripcionPorDefecto.description}</p>
    `;
}

//Libro 1
setupBook('libro1', 'descripcion1', {
    contraportadaFA: {
        titulo: "Formación Académica",
        descripcion: "Para poder ver los detalles de mi formación académica, por favor, vaya pulsando sobre las distintas páginas."
    },
    DAWFA: {
        title: "Fin Formación Académica",
        description: `
            <p><strong>Hasta aquí llega mi experiencia académica por el momento.</strong></p>
            <p>Gracias por visitar este apartado. ¡Espero poder continuar ampliando mi formación en el futuro!</p>
        `
    },
    DAMFA: {
        title: "DAW (Desarrollo de Aplicaciones Web)",
        description: `
            <p><strong>El ciclo formativo de Desarrollo de Aplicaciones Web</strong> de grado superior está orientado a la formación de profesionales capaces de diseñar, desarrollar y mantener aplicaciones y sitios web dinámicos, interactivos y funcionales. Este ciclo ofrece los conocimientos esenciales sobre programación, bases de datos, diseño web y gestión de proyectos, formando expertos para trabajar en la creación y gestión de plataformas online.</p>

            <h3>Características principales:</h3>

            <h4>Asignaturas principales:</h4>
            <ul>
                <li><strong>Programación:</strong> Lenguajes como HTML, CSS, JavaScript y frameworks como React, Angular o Vue.js.</li>
                <li><strong>Bases de datos:</strong> Diseño, creación y gestión de bases de datos SQL y NoSQL.</li>
                <li><strong>Desarrollo de aplicaciones web:</strong> Creación de sitios web interactivos y dinámicos usando tecnologías modernas.</li>
                <li><strong>Diseño de interfaces:</strong> Diseño de experiencias de usuario (UX) y interfaces de usuario (UI) adaptativas.</li>
                <li><strong>Servicios web:</strong> Integración de APIs y servicios externos en aplicaciones web.</li>
                <li><strong>Sistemas de gestión de contenido (CMS):</strong> Uso de plataformas como WordPress, Joomla o Drupal.</li>
            </ul>

            <h4>Enfoque práctico:</h4>
            <ul>
                <li>Desarrollo de proyectos web reales, como tiendas online, blogs o plataformas colaborativas.</li>
                <li>Uso de herramientas y entornos de desarrollo integrados (IDE).</li>
                <li>Prácticas en empresas del sector tecnológico.</li>
            </ul>

            <h4>Habilidades desarrolladas:</h4>
            <ul>
                <li>Diseño y desarrollo de aplicaciones web dinámicas y escalables.</li>
                <li>Programación tanto en el lado del cliente como del servidor.</li>
                <li>Diseño de experiencias de usuario atractivas y funcionales.</li>
                <li>Trabajo en equipo y gestión de proyectos web.</li>
            </ul>

            <h4>Salidas académicas y profesionales:</h4>
            <p>Este ciclo prepara para acceder a estudios universitarios o incorporarse al mercado laboral como:</p>
            <ul>
                <li>Desarrollador web frontend (especializado en la parte visual y de interacción).</li>
                <li>Desarrollador web backend (enfocado en la lógica y bases de datos).</li>
                <li>Programador full-stack (capacitado para trabajar tanto en frontend como en backend).</li>
                <li>Administrador de sistemas de gestión de contenido (CMS).</li>
                <li>Especialista en comercio electrónico y plataformas digitales.</li>
            </ul>

            <p><strong>En resumen:</strong> El ciclo de Desarrollo de Aplicaciones Web es ideal para estudiantes interesados en la creación y gestión de aplicaciones y plataformas online, proporcionando una formación técnica avanzada para abordar proyectos web en diversos sectores.</p>
        `
    },
    bachillerFA: {
        title: "DAM (Desarrollo de Aplicaciones Multiplataforma)",
        description: `
            <p><strong>El ciclo formativo de Desarrollo de Aplicaciones Multiplataforma</strong> de grado superior está orientado a la formación de profesionales capaces de crear, gestionar y mantener aplicaciones informáticas que puedan ejecutarse en diferentes sistemas operativos y dispositivos, como teléfonos móviles, tabletas y ordenadores. Este ciclo está diseñado para aquellos interesados en el campo de la programación y el desarrollo de software, abarcando diversas tecnologías y lenguajes de programación.</p>
    
            <h3>Características principales:</h3>
    
            <h4>Asignaturas principales:</h4>
            <ul>
                <li><strong>Programación:</strong> Técnicas y lenguajes de programación, estructuras de datos y algoritmos.</li>
                <li><strong>Bases de datos:</strong> Diseño, administración y optimización de bases de datos.</li>
                <li><strong>Entornos de desarrollo:</strong> Herramientas y plataformas para la creación de aplicaciones multiplataforma.</li>
                <li><strong>Desarrollo web:</strong> Diseño y desarrollo de aplicaciones para la web.</li>
                <li><strong>Interfaces de usuario:</strong> Diseño de interfaces adaptativas y usabilidad.</li>
                <li><strong>Sistemas operativos:</strong> Conocimiento y manejo de diferentes sistemas operativos, como Android, iOS, Windows y Linux.</li>
            </ul>
    
            <h4>Enfoque práctico:</h4>
            <ul>
                <li>Desarrollo de proyectos reales de aplicaciones multiplataforma.</li>
                <li>Prácticas en empresas del sector tecnológico.</li>
                <li>Uso de entornos de desarrollo integrados (IDE) y herramientas de control de versiones.</li>
            </ul>
    
            <h4>Habilidades desarrolladas:</h4>
            <ul>
                <li>Diseño y desarrollo de aplicaciones que funcionen en diversas plataformas.</li>
                <li>Conocimiento avanzado en programación y desarrollo de interfaces de usuario.</li>
                <li>Capacidad para resolver problemas técnicos complejos y optimizar procesos de programación.</li>
                <li>Trabajo en equipo y gestión de proyectos.</li>
            </ul>
    
            <h4>Salidas académicas y profesionales:</h4>
            <p>Este ciclo formativo prepara para acceder a estudios universitarios o incorporarse al mercado laboral como:</p>
            <ul>
                <li>Desarrollador de aplicaciones móviles.</li>
                <li>Programador web.</li>
                <li>Técnico en administración de bases de datos.</li>
                <li>Especialista en desarrollo de software multiplataforma.</li>
            </ul>
    
            <p><strong>En resumen:</strong> Este ciclo es ideal para estudiantes interesados en el desarrollo de software que deseen adquirir una formación técnica avanzada para trabajar en el diseño y creación de aplicaciones que funcionen en diferentes dispositivos y sistemas operativos.</p>
        `
    },
    portadaFA: {
        title: "Bachillerato Científico-Tecnológico",
        description: `
            <p><strong>El Bachillerato Científico-Tecnológico</strong> es un ciclo educativo que prepara a los estudiantes para acceder a estudios superiores en ciencia, tecnología, ingeniería y matemáticas (STEM). Este enfoque se caracteriza por asignaturas clave, como:</p>

            <ul>
                <li><strong>Matemáticas:</strong> Cálculo, álgebra, probabilidad y estadística.</li>
                <li><strong>Física:</strong> Fundamentos de la mecánica, electricidad, óptica y termodinámica.</li>
                <li><strong>Química:</strong> Estructura de la materia, reacciones químicas y compuestos.</li>
                <li><strong>Biología:</strong> Estudio de organismos, genética y medio ambiente (opcional).</li>
                <li><strong>Tecnología y Dibujo Técnico:</strong> Diseño, programación y uso de herramientas técnicas.</li>
            </ul>

            <p><strong>Habilidades desarrolladas:</strong></p>
            <ul>
                <li>Resolución de problemas.</li>
                <li>Pensamiento crítico y analítico.</li>
                <li>Capacidad para trabajar en proyectos técnicos y científicos.</li>
            </ul>

            <p><strong>Salidas académicas:</strong> Este bachillerato es una excelente base para continuar estudios en ingeniería, ciencias puras, tecnologías de la información y comunicación, arquitectura, y diseño técnico.</p>
        `
    }
});


//Libro 2
setupBook('libro2', 'descripcion2', {
    contraportada: { title: "", description: "" },
    php2FEA: {
        title: "Fin Formación Extra-Académica",
        description: `
            <p><strong>Hasta aquí llega mi experiencia académica por el momento.</strong></p>
            <p>Gracias por visitar este apartado. ¡Espero poder continuar ampliando mi formación en el futuro!</p>
        `
    },
    javascriptFEA: {
        title: "Curso PHP Avanzado",
        description: `
            <p>El <strong>Curso PHP Avanzado</strong> está diseñado para profundizar en las técnicas y herramientas más sofisticadas que ofrece PHP. A lo largo del curso, aprenderás a optimizar tus aplicaciones web, trabajar con bases de datos complejas y desarrollar sistemas web robustos utilizando buenas prácticas de programación.</p>
            <ul>
                <li>Temas avanzados como la programación orientada a objetos (OOP) en PHP.</li>
                <li>Uso de frameworks populares como Laravel o Symfony.</li>
                <li>Integración con bases de datos y servicios externos.</li>
                <li>Optimización de rendimiento y seguridad en aplicaciones PHP.</li>
            </ul>
        `
    },
    phpFEA: {
        title: "Curso JavaScript",
        description: `
            <p>El <strong>Curso JavaScript</strong> te permitirá adquirir una sólida comprensión de uno de los lenguajes de programación más populares y utilizados en el desarrollo web moderno. A lo largo del curso, dominarás las técnicas fundamentales de JavaScript, desde la manipulación del DOM hasta el manejo de asincronía con promesas y async/await.</p>
            <ul>
                <li>Introducción a JavaScript y su integración con HTML y CSS.</li>
                <li>Conceptos fundamentales como variables, funciones y estructuras de control.</li>
                <li>Programación asincrónica: Promesas, async/await y AJAX.</li>
                <li>Desarrollo de aplicaciones web interactivas utilizando JavaScript.</li>
            </ul>
        `
    },
    javaFEA: {
        title: "Curso PHP Básico",
        description: `
            <p>El <strong>Curso PHP Básico</strong> es ideal para principiantes que desean iniciarse en el desarrollo web con PHP. Aprenderás los fundamentos de este lenguaje de programación, cómo interactuar con bases de datos MySQL y cómo crear sitios web dinámicos y funcionales.</p>
            <ul>
                <li>Fundamentos de PHP: sintaxis, variables y operadores.</li>
                <li>Trabajo con formularios y bases de datos MySQL.</li>
                <li>Creación de sitios web dinámicos utilizando PHP.</li>
                <li>Introducción a la seguridad web básica en PHP.</li>
            </ul>
        `
    },
    angularFEA: {
        title: "Curso Java",
        description: `
            <p>El <strong>Curso Java</strong> está enfocado en enseñarte uno de los lenguajes más poderosos y demandados en el mundo de la programación. A lo largo del curso, aprenderás los principios de la programación orientada a objetos, el desarrollo de aplicaciones de consola y la creación de aplicaciones móviles con Android.</p>
            <ul>
                <li>Fundamentos de Java y programación orientada a objetos (OOP).</li>
                <li>Desarrollo de aplicaciones de consola en Java.</li>
                <li>Integración con bases de datos y creación de interfaces gráficas.</li>
                <li>Desarrollo de aplicaciones móviles Android con Java.</li>
            </ul>
        `
    },
    androidstudio2FEA: {
        title: "Curso Angular",
        description: `
            <p>En el <strong>Curso Angular</strong>, aprenderás a desarrollar aplicaciones web de una sola página (SPA) utilizando uno de los frameworks más populares de JavaScript. A lo largo del curso, explorarás conceptos como componentes, servicios, rutas y mucho más para crear aplicaciones modernas y escalables.</p>
            <ul>
                <li>Introducción a Angular y su arquitectura de componentes.</li>
                <li>Creación de aplicaciones SPA utilizando el framework Angular.</li>
                <li>Manejo de datos con servicios y APIs RESTful.</li>
                <li>Optimización y despliegue de aplicaciones Angular.</li>
            </ul>
        `
    },
    firebaseFEA: {
        title: "Curso Android Studio Avanzado",
        description: `
            <p>El <strong>Curso Android Studio Avanzado</strong> está dirigido a aquellos que ya tienen conocimientos básicos de desarrollo móvil y desean profundizar en la creación de aplicaciones complejas para Android. En este curso aprenderás a trabajar con herramientas avanzadas de Android Studio, optimizar el rendimiento de tus aplicaciones y gestionar bases de datos locales y en la nube.</p>
            <ul>
                <li>Desarrollo de aplicaciones Android avanzadas con Android Studio.</li>
                <li>Optimización del rendimiento y manejo de hilos (multithreading).</li>
                <li>Conexión con bases de datos en la nube y almacenamiento local.</li>
                <li>Integración de servicios externos y APIs.</li>
            </ul>
        `
    },
    androidstudioFEA: {
        title: "Curso Firebase",
        description: `
            <p>El <strong>Curso Firebase</strong> te enseñará a utilizar Firebase, una plataforma de desarrollo de aplicaciones móviles y web, para crear soluciones en tiempo real, gestionar bases de datos, autenticación de usuarios y más. Aprenderás a integrar Firebase en tus aplicaciones y sacar el máximo provecho de sus características.</p>
            <ul>
                <li>Uso de Firebase para bases de datos en tiempo real.</li>
                <li>Autenticación de usuarios con Firebase Authentication.</li>
                <li>Gestión de notificaciones push y almacenamiento de archivos en Firebase.</li>
                <li>Desarrollo de aplicaciones escalables utilizando Firebase.</li>
            </ul>
        `
    },
    blenderFEA: {
        title: "Curso Android Studio Básico",
        description: `
            <p>El <strong>Curso Android Studio Básico</strong> está dirigido a aquellos que desean iniciarse en el desarrollo de aplicaciones móviles para Android. Aprenderás a crear aplicaciones simples desde cero utilizando Android Studio, con énfasis en la interfaz de usuario y las funcionalidades básicas.</p>
            <ul>
                <li>Introducción a Android Studio y sus herramientas.</li>
                <li>Desarrollo de aplicaciones móviles sencillas para Android.</li>
                <li>Diseño de interfaces de usuario con XML y componentes básicos.</li>
                <li>Conexión con servicios y bases de datos locales.</li>
            </ul>
        `
    },
    wordpressFEA: {
        title: "Curso Blender",
        description: `
            <p>El <strong>Curso Blender</strong> es ideal para quienes desean iniciarse o profundizar en la creación de gráficos 3D, animaciones y modelos digitales. Con Blender, aprenderás a modelar, texturizar, iluminar y renderizar tus propios proyectos de diseño 3D.</p>
            <ul>
                <li>Modelado 3D: creación de formas y objetos tridimensionales.</li>
                <li>Texturización y aplicación de materiales.</li>
                <li>Animación 3D: movimiento de objetos y personajes.</li>
                <li>Renderizado de escenas y exportación de proyectos.</li>
            </ul>
        `
    },
    ofimaticaFEA: {
        title: "Curso WordPress",
        description: `
            <p>En el <strong>Curso WordPress</strong>, aprenderás a crear y gestionar sitios web utilizando uno de los gestores de contenido más populares del mundo. Desde la instalación y configuración hasta la creación de temas y plugins personalizados, dominarás las herramientas para gestionar sitios web de manera eficiente.</p>
            <ul>
                <li>Instalación y configuración de WordPress.</li>
                <li>Creación de temas y personalización de plantillas.</li>
                <li>Desarrollo de plugins y optimización del rendimiento.</li>
                <li>Gestión de contenido y SEO en WordPress.</li>
            </ul>
        `
    },
    mecanografiaFEA: {
        title: "Curso Ofimática",
        description: `
            <p>El <strong>Curso Ofimática</strong> está diseñado para enseñar el uso de las herramientas más utilizadas en el entorno de oficina, como Microsoft Word, Excel, PowerPoint y herramientas de colaboración como Google Drive. Aprenderás a realizar tareas administrativas, crear presentaciones y gestionar bases de datos de manera eficiente.</p>
            <ul>
                <li>Dominio de herramientas como Word, Excel y PowerPoint.</li>
                <li>Creación de documentos, hojas de cálculo y presentaciones profesionales.</li>
                <li>Trabajo con bases de datos y herramientas de colaboración.</li>
                <li>Uso de herramientas de productividad y gestión de proyectos.</li>
            </ul>
        `
    },
    portadaFEA: {
        title: "Curso Mecanografía",
        description: `
            <p>El <strong>Curso Mecanografía</strong> tiene como objetivo mejorar tu velocidad y precisión al escribir en el teclado, lo cual es una habilidad clave en el ámbito profesional y académico. Aprenderás técnicas eficaces para aumentar tu productividad en la escritura y mejorar tu destreza con el teclado.</p>
            <ul>
                <li>Mejora de la velocidad y precisión en la escritura.</li>
                <li>Técnicas para escribir sin mirar el teclado.</li>
                <li>Ejercicios prácticos para aumentar la destreza con las manos.</li>
                <li>Optimización del tiempo y productividad al escribir.</li>
            </ul>
        `
    }
});
