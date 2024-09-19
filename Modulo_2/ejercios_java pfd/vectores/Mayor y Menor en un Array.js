
let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = []
let cant = conseguirRandom(1,10)

for (i = 0; i <= 4; i++){
    num[i] = conseguirRandom(1,10)
    console.log(num[i]);
}

console.log(num);
console.log(Math.max(...num));
console.log(Math.min(...num));