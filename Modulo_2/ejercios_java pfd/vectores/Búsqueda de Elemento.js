function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [5, 6, 9, 11, 13, 22, 24],
    miNum = aleatorio(1, 25);

for (let i = 1; i <= 25; i++) {
    if (miNum === array[i]) {
        console.log(`Su número ${miNum} si existe en el arreglo`);
        i = 25;
    } else if (i == 25) {
        console.log(`Su número ${miNum} no existe en el arreglo`);
    }
}