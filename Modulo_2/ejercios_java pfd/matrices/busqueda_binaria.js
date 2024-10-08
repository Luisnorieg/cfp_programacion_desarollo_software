function busquedaBinaria(arr, objetivo, inicio, fin) {
    if (inicio > fin) {
        return -1;
    }

    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === objetivo) {
        return medio;
    }

    if (arr[medio] > objetivo) {
        return busquedaBinaria(arr, objetivo, inicio, medio - 1);
    }

    return busquedaBinaria(arr, objetivo, medio + 1, fin);
}

let arreglo = [1, 2, 3,4, 5, 9, 11,18,30,45,40,50];
let objetivo = 50;
let resultado = busquedaBinaria(arreglo, objetivo, 0, arreglo.length - 1);
console.log(resultado);