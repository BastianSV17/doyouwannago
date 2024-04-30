
function playSoundAndNextPage() {
    var sonido = document.getElementById('mySound');
    if (sonido.paused) {
        sonido.currentTime = 0;
    }
    sonido.play();
    
    setTimeout(function () {
        window.location.href = "html/yes.html";
    }, 95);
}

function moveButton() {
    var button = document.getElementById('noButton');
    
    // Dimensiones del botón
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    // Dimensiones de la ventana
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Límites máximos donde el botón puede moverse
    var maxX = windowWidth - buttonWidth;
    var maxY = windowHeight - buttonHeight;

    // Generar nuevas coordenadas 'x' y 'y' aleatorias dentro de los límites
    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;

    // Actualizar la posición del botón
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function backButton() {
    window.location.href = "../index.html";
}
