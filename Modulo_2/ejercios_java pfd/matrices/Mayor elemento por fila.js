const matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
let mayor = {}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        mayor = Math.max(matriz[i][j])
    }
    console.log(mayor);
}