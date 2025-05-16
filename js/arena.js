// Paso 1.2: Datos de las cartas y mostrar selección al hacer clic en PvP
const cartasData = {
    spiderman: {
        nombre: 'Spiderman',
        clave: 'SM-001',
        imagenFront: '/img/Spiderman.webp',
        habilidades: ['Fuerza sobrehumana', 'Agilidad y reflejos mejorados', 'Sentido arácnido', 'Lanzar telarañas'],
        descripcion: 'Un joven con asombrosos poderes arácnidos.',
        categoria: 'avengers',
        estadisticas: {
            fuerza: 80,
            ataque: 75,
            debilidad: 'Electricidad',
            daño: 70
        }
    },
    ironman: {
        nombre: 'Iron Man',
        clave: 'IM-002',
        imagenFront: '/img/Ironman.webp',
        habilidades: ['Vuelo propulsado', 'Armadura de alta tecnología', 'Rayos repulsores', 'Inteligencia genial'],
        descripcion: 'Tony Stark, genio, millonario, playboy, filántropo.',
        categoria: 'avengers',
        estadisticas: {
            fuerza: 85,
            ataque: 90,
            debilidad: 'Ataques EMP',
            daño: 80
        }
    },
    wolverine: {
        nombre: 'Wolverine',
        clave: 'WL-003',
        imagenFront: '/img/wolverine.webp',
        habilidades: ['Garras de adamantium', 'Factor de curación', 'Sentidos mejorados'],
        descripcion: 'Un mutante con garras afiladas y un poder regenerativo.',
        categoria: 'xmen',
        estadisticas: {
            fuerza: 90,
            ataque: 80,
            debilidad: 'El magnetismo',
            daño: 70
        }
    },
    starlord: {
        nombre: 'Star-Lord',
        clave: 'SL-004',
        imagenFront: '/img/starlord.webp',
        habilidades: ['Excelente tirador', 'Liderazgo estratégico', 'Equipo avanzado'],
        descripcion: 'El legendario forajido líder de los Guardianes.',
        categoria: 'guardians',
        estadisticas: {
            fuerza: 70,
            ataque: 65,
            debilidad: 'Ataques cuerpo a cuerpo',
            daño: 60
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const pvpBtn = document.getElementById("pvp");
    const modosDeJuego = document.querySelector(".modos-de-juego");
    const seleccionCartas = document.getElementById("seleccion-cartas");

    pvpBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // Ocultar modos de juego
        modosDeJuego.style.display = "none";
        // Mostrar selección de cartas
        seleccionCartas.style.display = "block";
        // Mostrar cartas disponibles
        mostrarCartasDisponibles();
    });

    // Inicialmente, deshabilitar botón iniciar combate
    document.getElementById("iniciar-combate").disabled = true;
});

function mostrarCartasDisponibles() {
    const cartas = Object.values(cartasData);
    const zonas = document.querySelectorAll(".cartas-disponibles");

    zonas.forEach(zona => {
        zona.innerHTML = '';
        cartas.forEach(carta => {
            const div = document.createElement("div");
            div.classList.add("carta");
            div.innerHTML = `
                <img src="${carta.imagenFront}" alt="${carta.nombre}">
                <p>${carta.nombre}</p>
            `;
            // Asignar evento click para seleccionar carta
            div.addEventListener("click", seleccionarCartaJugador);
            zona.appendChild(div);
        });
    });
}

// Paso 1.3: Selección de cartas para cada jugador y habilitar botón iniciar combate
let seleccionJugador1 = null;
let seleccionJugador2 = null;

function seleccionarCartaJugador(event) {
    const cartaDiv = event.currentTarget;
    const zonaPadre = cartaDiv.parentElement.id; // 'cartas-jugador1' o 'cartas-jugador2'

    if (zonaPadre === "cartas-jugador1") {
        if (seleccionJugador1) seleccionJugador1.classList.remove("seleccionada");
        seleccionJugador1 = cartaDiv;
    } else if (zonaPadre === "cartas-jugador2") {
        if (seleccionJugador2) seleccionJugador2.classList.remove("seleccionada");
        seleccionJugador2 = cartaDiv;
    }
    cartaDiv.classList.add("seleccionada");

    // Habilitar botón solo si ambas cartas están seleccionadas
    document.getElementById("iniciar-combate").disabled = !(seleccionJugador1 && seleccionJugador2);
}

document.getElementById("iniciar-combate").addEventListener("click", () => {
    if (!seleccionJugador1 || !seleccionJugador2) {
        alert("Selecciona una carta para cada jugador.");
        return;
    }

    // Guardar las cartas seleccionadas en sessionStorage para usar en combate.html
    const carta1 = seleccionJugador1.querySelector("p").textContent;
    const carta2 = seleccionJugador2.querySelector("p").textContent;

    sessionStorage.setItem("jugador1", carta1);
    sessionStorage.setItem("jugador2", carta2);

    // Redirigir a combate.html
    window.location.href = "combate.html";
});
