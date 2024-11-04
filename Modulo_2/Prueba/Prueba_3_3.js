function Final(arr) {
    let indice = 0; // Índice para colocar el siguiente elemento no cero

    // Mover todos los elementos no cero al frente del array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[indice++] = arr[i];
        }
    }

    // Rellenar el resto del array con ceros
    while (indice < arr.length) {
        arr[indice++] = 0;
    }
}

// Ejemplo de uso
let array = [0, 1, 0, 3, 12];
Final(array);
console.log(array); 