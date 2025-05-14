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
    // ELIMINAMOS ESTA LÍNEA: const cerrarVistaCartaBtn = document.getElementById('cerrar-vista-carta');
    const categoryButtons = document.querySelectorAll('.category-btn');

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
            });
        }
    }

    // **Funcionalidad para mostrar la vista de carta seleccionada**
    if (cartasMarvelLista && vistaCartaSeleccionada && cartaAmpliada && cartaReversoVista) {
        cartasMarvelLista.addEventListener('click', (event) => {
            const cartaElement = event.target.closest('.carta-marvel');
            if (cartaElement) {
                const cartaId = cartaElement.dataset.id;
                const cartaInfo = cartasData[cartaId];

                if (cartaInfo) {
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

    // **ELIMINAMOS ESTE BLOQUE DE CÓDIGO:**
    /*
    if (cerrarVistaCartaBtn && vistaCartaSeleccionada && marvelSection) {
        cerrarVistaCartaBtn.addEventListener('click', () => {
            vistaCartaSeleccionada.style.display = 'none';
            marvelSection.classList.remove('carta-seleccionada');
        });
    }
    */

    // **Funcionalidad para filtrar las cartas de Marvel por categoría**
    if (categoryButtons && cartasMarvelLista) {
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
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        const allButton = document.querySelector('.category-btn[data-category="all"]');
        if (allButton) {
            allButton.click();
        }
    }
});