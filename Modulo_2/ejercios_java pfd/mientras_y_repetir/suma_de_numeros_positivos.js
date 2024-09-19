let random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let numero = random(-5,6)
let suma = 0;
while(numero > 0){
    suma += numero
    console.log(numero)
    numero = random(-5,6)
    console.log(numero)
}
console.log(suma); 