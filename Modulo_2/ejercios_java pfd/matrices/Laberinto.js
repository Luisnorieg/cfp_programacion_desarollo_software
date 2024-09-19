function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let laberinto = [],
    texto = '';



for (let i = 0; i < 10; i++) {
    laberinto[i] = [];
    for (let j = 0; j <= 10; j++) {
        laberinto[i][j] = ' ¤ ';
    }
}

laberinto[0][2] = ' ¥ ';
laberinto[1][2] = '   ';
laberinto[2][2] = '   ';
laberinto[3][2] = '   ';
laberinto[3][3] = '   ';
laberinto[3][4] = '   ';
laberinto[4][4] = '   ';
laberinto[5][4] = '   ';
laberinto[5][5] = '   ';
laberinto[5][6] = '   ';
laberinto[4][6] = '   ';
laberinto[4][7] = '   ';
laberinto[4][8] = '   ';
laberinto[5][8] = '   ';
laberinto[6][8] = '   ';
laberinto[7][8] = '   ';
laberinto[7][7] = '   ';
laberinto[8][7] = '   ';
laberinto[8][6] = '   ';
laberinto[9][6] = '   ';


laberinto[4][2] = '   ';
laberinto[3][6] = '   ';
laberinto[2][6] = '   ';
laberinto[5][2] = '   ';
laberinto[6][4] = '   ';
laberinto[6][2] = '   ';
laberinto[7][2] = '   ';
laberinto[8][2] = '   ';
laberinto[8][3] = '   ';
laberinto[8][4] = '   ';



do {
    let fila = 0;
    let columna = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (laberinto[i][j] == 5) {
                fila = i;
                columna = j;
            }
            texto += laberinto[i][j]
        }
        console.log(texto);
        texto = [];
    }



    switch (aleatorio(1, 4)) {
        case 1:
            if (fila - 1 > 0 && laberinto[fila - 1][columna] == '   ') {
                laberinto[fila - 1][columna] = '¥';
                laberinto[fila][columna] = '   '; 
            }
            continue;

        case 2:
            if (laberinto[fila + 1][columna] == '   ') {
                laberinto[fila + 1][columna] = '¥';
                laberinto[fila][columna] = '   ';
            } 
            continue;
        case 3:
            if (laberinto[fila][columna - 1] == '   ') {
                laberinto[fila][columna  -1] = '¥';
                laberinto[fila][columna] = '   ';
            }
            continue;
        case 4:
            if (laberinto[fila][columna + 1] == '   ') {
                laberinto[fila][columna + 1] = '¥';
                laberinto[fila][columna] = '   ';
            }
            continue;
    }

} while (laberinto[9][6] === '¥');

console.log('Has ganado');

