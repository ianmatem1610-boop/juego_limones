let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO = 20
const ALTURA_PERSONAJE = 60
const ANCHO_PERSONAJE = 40


function iniciar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo(){
    ctx.fillStyle = "blue"; 
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
}

function dibujarPersonaje(){
    ctx.fillStyle = "yellow"; 
    ctx.fillRect(canvas.width / 2 - 20, canvas.height -(ALTURA_SUELO+ALTURA_PERSONAJE), ANCHO_PERSONAJE, ALTURA_PERSONAJE); 
}