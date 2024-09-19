function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const matriz1 = [], matriz2 = [];

let sumaM1 = 0,
    sumaM2 = 0;

for (let i = 0; i < 3; i++) {
    matriz1[i] = [];
    matriz2[i] = [];

    for (let j = 0; j < 3; j++) {
        matriz1[i][j] = aleatorio(1, 10);
        sumaM1 += matriz1[i][j];
        matriz2[i][j] = aleatorio(1, 10);
        sumaM2 += matriz2[i][j];
    }
}

console.log(`La suma de los números ${matriz1} es igual a ${sumaM1}`);
console.log(`La suma de los números ${matriz2} es igual a ${sumaM2}`);


const suma = matriz1.reduce((a, b) => {
    return a + b.reduce((a, val) => a + val, 0);
}, 0);
console.log(matriz1, suma); 