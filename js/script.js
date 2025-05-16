document.addEventListener('DOMContentLoaded', () => {
    const fotoPerfil = document.getElementById('foto-perfil');
    const inputCambiarPerfil = document.getElementById('input-cambiar-perfil');
    const homeSection = document.querySelector('.home');
    const marvelSection = document.querySelector('.marvel-container');
    const marvelBtn = document.getElementById('marvel-btn');
    const botonesMenu = document.querySelectorAll('.boton-interactivo');
    const cartasMarvelLista = document.querySelector('.lista-cartas-marvel');
    const vistaCartaSeleccionada = document.querySelector('.carta-seleccionada-vista');
    const cartaAmpliada = document.querySelector('.carta-ampliada');
    const cartaReversoVista = document.querySelector('.carta-reverso-vista');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const bodyElement = document.body; // Seleccionamos el elemento body

    // **Datos de las cartas (simulado desde un JSON)**
    const cartasData = {
        spiderman: {
            nombre: 'Spiderman',
            clave: 'SM-001',
            imagenFront: 'img/marvel/spiderman_front.jpg',
            habilidades: ['Fuerza sobrehumana', 'Agilidad y reflejos mejorados', 'Sentido arácnido', 'Lanzar telarañas'],
            descripcion: 'Un joven con asombrosos poderes arácnidos.',
            categoria: 'avengers'
        },
        ironman: {
            nombre: 'Iron Man',
            clave: 'IM-002',
            imagenFront: 'img/marvel/ironman_front.jpg',
            habilidades: ['Vuelo propulsado', 'Armadura de alta tecnología', 'Rayos repulsores', 'Inteligencia genial'],
            descripcion: 'Tony Stark, genio, millonario, playboy, filántropo.',
            categoria: 'avengers'
        },
        wolverine: {
            nombre: 'Wolverine',
            clave: 'WL-003',
            imagenFront: 'img/marvel/wolverine_front.jpg',
            habilidades: ['Garras de adamantium', 'Factor de curación', 'Sentidos mejorados'],
            descripcion: 'Un mutante con garras afiladas y un poder regenerativo.',
            categoria: 'xmen'
        },
        starlord: {
            nombre: 'Star-Lord',
            clave: 'SL-004',
            imagenFront: 'img/marvel/starlord_front.jpg',
            habilidades: ['Excelente tirador', 'Liderazgo estratégico', 'Equipo avanzado'],
            descripcion: 'El legendario forajido líder de los Guardianes.',
            categoria: 'guardians'
        },
        thor: {
            nombre: 'Thor',
            clave: 'TH-005',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Dios del trueno', 'Fuerza sobrehumana', 'Control del rayo'],
            descripcion: 'El dios del trueno, con fuerza y control del rayo.',
            categoria: 'avengers'
        },
        hulk: {
            nombre: 'Hulk',
            clave: 'HK-006',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Fuerza descomunal', 'Resistencia casi invencible', 'Regeneración rápida'],
            descripcion: 'Fuerza descomunal y resistencia casi invencible.',
            categoria: 'avengers'
        },
        avispa: {
            nombre: 'Avispa',
            clave: 'AV-007',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Reducir tamaño', 'Vuelo', 'Disparo de energía'],
            descripcion: 'Pequeña pero poderosa, con la habilidad de reducir su tamaño.',
            categoria: 'avengers'
        },
        hombreHormiga: {
            nombre: 'Hombre Hormiga',
            clave: 'HH-008',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Cambio de tamaño', 'Experto en tecnología', 'Fuerza aumentada'],
            descripcion: 'Experto en tecnología y capaz de cambiar de tamaño.',
            categoria: 'avengers'
        },
        capitanAmerica: {
            nombre: 'Capitán América',
            clave: 'CA-009',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Soldado superhumano', 'Escudo indestructible', 'Liderazgo'],
            descripcion: 'Soldado superhumano con un escudo indestructible.',
            categoria: 'avengers'
        },
        capitanaMarvel: {
            nombre: 'Capitana Marvel',
            clave: 'CM-016',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Superfuerza', 'Vuelo', 'Energía cósmica'],
            descripcion: 'Superfuerza, vuelo y energía cósmica.',
            categoria: 'avengers'
        },
        panteraNegra: {
            nombre: 'Pantera Negra',
            clave: 'PN-017',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Agilidad', 'Fuerza', 'Tecnología avanzada'],
            descripcion: 'Agilidad, fuerza y tecnología avanzada de Wakanda.',
            categoria: 'avengers'
        },
        blackWidow: {
            nombre: 'Black Widow',
            clave: 'BW-018',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Combate cuerpo a cuerpo', 'Espionaje', 'Agilidad'],
            descripcion: 'Experta en combate cuerpo a cuerpo y espionaje.',
            categoria: 'avengers'
        },
        brujaEscarlata: {
            nombre: 'Bruja Escarlata',
            clave: 'BE-019',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Manipulación de la realidad', 'Magia', 'Poderes psíquicos'],
            descripcion: 'Manipulación de la realidad y magia poderosa.',
            categoria: 'avengers'
        },
        ciclope: {
            nombre: 'Cíclope',
            clave: 'CI-010',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Rayos ópticos', 'Liderazgo', 'Tácticas de combate'],
            descripcion: 'Líder de los X-Men con poderosos rayos ópticos.',
            categoria: 'xmen'
        },
        jeanGrey: {
            nombre: 'Jean Grey',
            clave: 'JG-011',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Telepatía', 'Telequinesis', 'Fuerza mental'],
            descripcion: 'Mutante con habilidades telepáticas y telequinéticas.',
            categoria: 'xmen'
        },
        tormenta: {
            nombre: 'Tormenta',
            clave: 'TO-012',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Control del clima', 'Vuelo', 'Manipulación de elementos'],
            descripcion: 'Controla el clima y los elementos atmosféricos.',
            categoria: 'xmen'
        },
        bestia: {
            nombre: 'Bestia',
            clave: 'BE-013',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Fuerza', 'Agilidad', 'Intelecto superior'],
            descripcion: 'Mutante con fuerza, agilidad y gran intelecto.',
            categoria: 'xmen'
        },
        profesorX: {
            nombre: 'Profesor X',
            clave: 'PX-014',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Telepatía', 'Liderazgo', 'Fundador de los X-Men'],
            descripcion: 'Telepata poderoso y fundador de los X-Men.',
            categoria: 'xmen'
        },
        gambito: {
            nombre: 'Gambito',
            clave: 'GA-015',
            imagenFront: 'img/placeholder.png',
            habilidades: ['Carga cinética', 'Agilidad', 'Lanzamiento de cartas'],
            descripcion: 'Mutante con habilidad para cargar objetos con energía cinética.',
            categoria: 'xmen'
        }
        // ... más datos de cartas ...
    };

    // **Funcionalidad para cambiar la foto de perfil**
    if (fotoPerfil && inputCambiarPerfil) {
        fotoPerfil.addEventListener('click', () => {
            inputCambiarPerfil.click();
        });

        inputCambiarPerfil.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    fotoPerfil.src = e.target.result;
                };
                reader.readAsDataURL(file);
    }
});

// Nueva funcionalidad para voltear la carta al hacer clic en ella
document.querySelectorAll('.carta-marvel').forEach(carta => {
    carta.addEventListener('click', (event) => {
        // Evitar que el clic en la carta ampliada abra la vista ampliada
        if (event.target.closest('.carta-seleccionada-vista')) {
            return;
        }
        const inner = carta.querySelector('.carta-inner');
        if (inner) {
            inner.classList.toggle('flipped');
        }
    });
});
    }

    // **Funcionalidad para mostrar/ocultar secciones del menú**
    if (marvelBtn && homeSection && marvelSection) {
        marvelBtn.addEventListener('click', () => {
            homeSection.style.display = 'none';
            marvelSection.style.display = 'block';
        });

        if (botonesMenu.length > 0) {
            botonesMenu[0].addEventListener('click', () => {
                homeSection.style.display = 'flex';
                marvelSection.style.display = 'none';
                if (vistaCartaSeleccionada) {
                    vistaCartaSeleccionada.style.display = 'none';
                    marvelSection.classList.remove('carta-seleccionada');
                }
                bodyElement.style.backgroundImage = "url('../img/Fondo.jpg')";
                bodyElement.style.backgroundSize = 'cover';
                bodyElement.style.backgroundRepeat = 'no-repeat';
                bodyElement.style.backgroundPosition = 'center';
            });
        }
    }

    // **Funcionalidad para mostrar la vista de carta seleccionada**
    if (cartasMarvelLista && vistaCartaSeleccionada && cartaAmpliada && cartaReversoVista) {
        cartasMarvelLista.addEventListener('click', (event) => {
            const cartaElement = event.target.closest('.carta-marvel');
            if (cartaElement) {
                // Si la carta ya está volteada, no hacer nada para evitar conflicto con la vista ampliada
                if (cartaElement.querySelector('.carta-inner').classList.contains('flipped')) {
                    return;
                }

                const cartaId = cartaElement.dataset.id;
                const cartaInfo = cartasData[cartaId];

                if (cartaInfo && vistaCartaSeleccionada) {
                    // Añadir clase basada en la categoría
                    vistaCartaSeleccionada.className = 'carta-seleccionada-vista'; // Resetear clases anteriores
                    if (cartaInfo.categoria === 'avengers') {
                        vistaCartaSeleccionada.classList.add('avengers-card');
                    } else if (cartaInfo.categoria === 'xmen') {
                        vistaCartaSeleccionada.classList.add('xmen-card');
                    } // Añade más condiciones si tienes estilos específicos para otras categorías

                    cartaAmpliada.innerHTML = `
                        <img src="${cartaInfo.imagenFront}" alt="${cartaInfo.nombre}">
                        <div class="info-principal">
                            <h3>${cartaInfo.nombre}</h3>
                            <p class="clave">${cartaInfo.clave}</p>
                        </div>
                    `;

                    let habilidadesHTML = '<h3>Habilidades</h3><ul>';
                    cartaInfo.habilidades.forEach(habilidad => {
                        habilidadesHTML += `<li>${habilidad}</li>`;
                    });
                    habilidadesHTML += '</ul>';
                    habilidadesHTML += `<p class="descripcion">${cartaInfo.descripcion}</p>`;
                    cartaReversoVista.innerHTML = habilidadesHTML;

                    vistaCartaSeleccionada.style.display = 'flex';
                    marvelSection.classList.add('carta-seleccionada');
                }
            }
        });
    }

    // **Funcionalidad para cerrar la vista de carta seleccionada al hacer clic fuera de las cartas**
    if (vistaCartaSeleccionada && marvelSection) {
        vistaCartaSeleccionada.addEventListener('click', (event) => {
            if (event.target === vistaCartaSeleccionada) {
                vistaCartaSeleccionada.style.display = 'none';
                marvelSection.classList.remove('carta-seleccionada');
            }
        });
    }

    // **Funcionalidad para filtrar las cartas de Marvel por categoría y cambiar el fondo**
    if (categoryButtons && cartasMarvelLista && bodyElement) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                const cartas = cartasMarvelLista.querySelectorAll('.carta-marvel');

                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                cartas.forEach(card => {
                    const cartaId = card.dataset.id;
                    const cartaInfo = cartasData[cartaId];
                    if (category === 'all' || (cartaInfo && cartaInfo.categoria === category)) {
                        card.style.display = 'block';
                        // Remover clase flipped al mostrar la carta para evitar que quede volteada
                        card.querySelector('.carta-inner').classList.remove('flipped');
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Cambiar el fondo según la categoría seleccionada
                if (category === 'avengers') {
                    bodyElement.style.backgroundImage = "url('../img/AvengersFondo.jpg')";
                    bodyElement.style.backgroundSize = 'cover';
                    bodyElement.style.backgroundRepeat = 'no-repeat';
                    bodyElement.style.backgroundPosition = 'cover';
                } else if (category === 'xmen') {
                    bodyElement.style.backgroundImage = "url('../img/XMENFondo.webp')";
                    bodyElement.style.backgroundSize = 'cover';
                    bodyElement.style.backgroundRepeat = 'no-repeat';
                    bodyElement.style.backgroundPosition = 'cover';
                } else if (category === 'guardians') {
                    bodyElement.style.backgroundImage = "url('../img/GuardiansFondo.jpg')"; // Puedes poner un fondo específico si lo tienes
                    bodyElement.style.backgroundSize = 'cover';
                    bodyElement.style.backgroundRepeat = 'no-repeat';
                    bodyElement.style.backgroundPosition = 'cover';
                } else {
                    bodyElement.style.backgroundImage = "url('../img/Fondo.jpg')";
                    bodyElement.style.backgroundSize = 'cover';
                    bodyElement.style.backgroundRepeat = 'no-repeat';
                    bodyElement.style.backgroundPosition = 'cover';
                }
            });
        });

        const allButton = document.querySelector('.category-btn[data-category="all"]');
        if (allButton) {
            allButton.click();
        }
    }
});