let array = [0, 1, 0, 3, 12];

function ar(arr) {
    let inicio = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[inicio++] = arr[i];
        }
    }


    while (inicio < arr.length) {
        arr[inicio++] = 0;
    }
}

ar(array);
console.log(array); 