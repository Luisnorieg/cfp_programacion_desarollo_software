let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let numero = conseguirRandom(1,50);
intentos = 10;
suma = 0;
suma2 = 0;

while(suma2 != intentos){
    numero = conseguirRandom(1,10)
    console.log(numero);
    suma += numero%2 == 0? numero:0;
    suma2++;
}
        
console.log(suma)
console.log(suma2);