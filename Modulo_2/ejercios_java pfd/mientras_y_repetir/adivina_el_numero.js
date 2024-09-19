let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let numero = conseguirRandom(1,10)
let numero2 = conseguirRandom(1,10)

let suma = 0;

while (numero != numero2){
    numero = conseguirRandom(1,100)
    console.log(numero);
    numero2 = conseguirRandom(1,100)
    console.log(numero2);
    suma += 1
}
console.log("Adivinaste el número");
console.log("La máquina lo adivino en " + suma + " Intentos");