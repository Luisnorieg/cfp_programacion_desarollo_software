let desordenado = [1,5,2,6,4,3];

desordenado.sort((a, b) => {
    console.log(a - b)
    return a - b;
});

console.log(desordenado);