const array = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
let suma = 0;
let division = 0;


for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length + 1; j++) {
        suma += array[i][j];
    }
    division = Math.round(suma / 3)
    console.log(division);
    suma = 0
}