

function toggleMode() {
    // Obtener el modo actual del body
    var currentMode = document.body.id;
    Aplicar(currentMode);
}

// Verificar la preferencia guardada en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var mode = localStorage.getItem('mode');

    // Aplicar el modo guardado
    if (mode) {
        Aplicar(mode);
    }
});

function Aplicar(variable) {

    // Alternar entre modos
    if (variable === 'light-mode') {
        document.body.id = 'dark-mode'; // Cambiar a dark-mode
        document.getElementById('cuerpo').id = 'cuerpo2';
    
    } else {
        document.body.id = 'light-mode'; // Cambiar a light-mode
        document.getElementById('cuerpo2').id = 'cuerpo';
    }

    localStorage.setItem('mode', variable); // Guardar la preferencia

    }