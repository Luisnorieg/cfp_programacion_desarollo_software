let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita')
let autorElem = document.getElementById('autor')

function generarEnteroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCitas(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}


cambiarCitas();

botonElem.addEventListener('click', cambiarCitas);