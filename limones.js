let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ANCHO_LIMON = 20;
const ALTO_LIMON =20;


let  personajeX = canvas.width/2;
let limobX= canvas.width/2;
let limobY=5;


function iniciar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function dibujarSuelo(){
    ctx.fillStyle = "blue"; 
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
}

function dibujarPersonaje(){
    ctx.fillStyle = "yellow"; 
    ctx.fillRect(personajeX, canvas.height -(ALTURA_SUELO+ALTURA_PERSONAJE), ANCHO_PERSONAJE, ALTURA_PERSONAJE); 
}

function moverIzquierda (){
    personajeX=personajeX-10;
    actualizarPantalla();
}

function moverDerecha (){
    personajeX=personajeX+10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();

}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function dibujarLimon(){
 ctx.fillStyle = "green"; 
    ctx.fillRect(limobX,limobY, ANCHO_LIMON, ALTO_LIMON);
}

function  bajarLimon(){
    limobY = limobY +10;
    actualizarPantalla();
}