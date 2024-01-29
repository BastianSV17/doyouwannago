
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
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

function backButton() {
    window.location.href = "../index.html";
}
