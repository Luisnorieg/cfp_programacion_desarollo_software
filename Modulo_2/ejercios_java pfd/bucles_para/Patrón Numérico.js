
let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,10)
console.log(num);

let numero = "";

for (let i = 1; i <= num; i++) {

    numero += i.toString();
    console.log(numero);
}