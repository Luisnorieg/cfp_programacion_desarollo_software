const { sumar, restar} = require('./promises.mjs')

let sum = sumar(5, 5)
let rest = restar(10,4)


console.log(`Su suma es: ${sum}`); 
console.log(`Su resta es: ${rest}`);