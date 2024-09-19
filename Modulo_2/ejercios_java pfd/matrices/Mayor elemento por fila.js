const MATRIZ = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
let mayor = {}

for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ[i].length; j++) {
        mayor = Math.max(MATRIZ[i][j])
    }
    console.log(mayor);
}