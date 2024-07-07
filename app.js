
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));// verificar que tipo de valor es numeroDeUsuario si es string o numero.
    console.log(numeroDeUsuario);// ver numero de usuatio en consola
    console.log(numeroSecreto);// ver humero generado de forma random.
    console.log(numeroSecreto === numeroDeUsuario);// veridicar si numero secreto es igual al numero del usuario generado un dato booleano en la consola.*/
    console.log(intentos);
    if(numeroSecreto===numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        }else{
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';// # es para identificar que se va a tranajar con el ID, .value='' es para dejar la casilla en blanco despues de la accion. 
}

function generarNumeroSecreto() {
    let numeroGenerado = (Math.floor(Math.random()*numeroMaximo)+1); 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los  numeros podemos salir del juego
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }else{
    // Si el numero genrado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    } 
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //mensaje de intervalo de numeros,generar numero aleatorio y reinicializar numero de intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

/*
esta version esta sin funcion 
let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Juego del número Secreto';
let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Indica un número del 1 al 10';*/

