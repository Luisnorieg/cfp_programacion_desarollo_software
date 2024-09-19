let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let numero=conseguirRandom(1,20)
factorial = 1;
for(i=1; i<= numero; i++){
    factorial= factorial*i
}
console.log('el factorial de ',numero, 'es ',factorial);
