let array = [1,2,3,4,5,6,7,8,9,10],
    arrayAlRevez = [];
    contador = 0

for (let i = 9; i >= 0; i--) {
    arrayAlRevez[contador] = array[i];
    contador += 1
}

console.log(arrayAlRevez);