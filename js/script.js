document.addEventListener('DOMContentLoaded', () => {
    const fotoPerfil = document.getElementById('foto-perfil');
    const inputCambiarPerfil = document.getElementById('input-cambiar-perfil');

    // When clicking the profile photo, trigger the hidden file input
    fotoPerfil.addEventListener('click', () => {
        inputCambiarPerfil.click();
    });

    // When a new file is selected, update the profile photo preview
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
});
