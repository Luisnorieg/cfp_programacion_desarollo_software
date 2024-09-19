const MATRIZ = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12,],
    [13,14,15,16]
]
let almacenar = [];

for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ[i].length; j++) {
        almacenar += MATRIZ[i][j] + ' | '
    }
    console.log(almacenar);   
    almacenar = [];     
}

for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = MATRIZ[i].length -1; j >= 0; j--) {
        almacenar += MATRIZ[j][i] + ' | ';
    }
    console.log(almacenar);   
    almacenar = [];     
}

for (let i = MATRIZ.length -1; i >= 0; i--) {
    for (let j = 0; j < MATRIZ[i].length; j++) {
        almacenar += MATRIZ[j][i] + ' | '
    }
    console.log(almacenar);   
    almacenar = [];     
}
