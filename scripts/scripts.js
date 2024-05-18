
function playSoundAndNextPage() {
    playYesButtonSound()
    setTimeout(function () {
        window.location.href = "html/yes.html";
    }, 95);
}

function moveButton() {
    var button = document.getElementById('noButton');

    playNoButtonSound()

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

    //Si se llega a presionar el boton NO, debe rebotar por toda la pantalla
    if (button.style.left == "0px" || button.style.top == "0px" || button.style.left == (windowWidth - buttonWidth) + "px" || button.style.top == (windowHeight - buttonHeight) + "px") {
        button.style.left = newX + 'px';
        button.style.top = newY + 'px';
    }
    playNoButtonSound()
}

function backButton() {
    window.location.href = "../index.html";
}

function playNoButtonSound(){
    var sonido = new Audio('audio/sonido.mp3');
    if (sonido.paused) {
        sonido.currentTime = 0;
    }
    sonido.play();
}

function playYesButtonSound(){
    var sonido = new Audio('audio/sonido2.mp3');
    if (sonido.paused) {
        sonido.currentTime = 0;
    }
    sonido.play();
}