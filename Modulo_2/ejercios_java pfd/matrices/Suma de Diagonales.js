const MATRIZ = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
let suma = 0,
    suma2 = 0;

for (let i = 0; i < 5; i++) {
    suma += MATRIZ[i][i]
    suma2 += MATRIZ[i][4-i]
}

console.log(suma);
console.log(suma2);