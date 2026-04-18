function generarAleatorio(min,max){
    let random=Math.random();
    //ejemplo: max es 600 , min es 5
    let numero=random(max-min);//0-max 
    let numeroEntero = parseInt(numero);
     numeroEntero = numeroEntero+min;
    return numeroEntero;
}