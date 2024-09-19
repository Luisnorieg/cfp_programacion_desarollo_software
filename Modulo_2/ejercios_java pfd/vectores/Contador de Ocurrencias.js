function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [2,5,7,8,9,5,2,4,5,2],
    miNum = aleatorio(1, 10),
    contador = 0;

for (let i = 1; i <= 10; i++){
    if (miNum === array[i]) {
        contador += 1;
    }
}

console.log(`el número ${miNum} aparece ${contador} veces`);