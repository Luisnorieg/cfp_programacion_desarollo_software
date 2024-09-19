let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let Adivinar = conseguirRandom(1,50);
let Adivinar2 = conseguirRandom(1,50);

suma = 0;
do {
    Adivinar = conseguirRandom(1,50)
    console.log(Adivinar);
    Adivinar2 = conseguirRandom(1,50)
    console.log(Adivinar2);
    suma +=1

} while (Adivinar != Adivinar2);
console.log("Numeros de intentos " + suma);