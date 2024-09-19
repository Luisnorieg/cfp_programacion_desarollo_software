let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let numero = conseguirRandom(-50,50);
let suma = 0;

while (numero > 0){
    numero = conseguirRandom(-50,50);
    console.log(numero) 
    suma += 1
}
console.log("El numero negativo que la maquina dió fue: " + numero);
console.log("Intentos de la maquina en dar un numero negativo: " + suma); 