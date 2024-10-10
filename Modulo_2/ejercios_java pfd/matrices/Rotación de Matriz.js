const matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12,],
    [13,14,15,16]
]
let almacenar = [];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        almacenar += matriz[i][j] + ' | '
    }
    console.log(almacenar);   
    almacenar = [];     
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = matriz[i].length -1; j >= 0; j--) {
        almacenar += matriz[j][i] + ' | ';
    }
    console.log(almacenar);   
    almacenar = [];     
}

for (let i = matriz.length -1; i >= 0; i--) {
    for (let j = 0; j < matriz[i].length; j++) {
        almacenar += matriz[j][i] + ' | '
    }
    console.log(almacenar);   
    almacenar = [];     
}
