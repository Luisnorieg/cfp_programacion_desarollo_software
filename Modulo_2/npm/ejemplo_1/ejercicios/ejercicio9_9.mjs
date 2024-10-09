import { multi, restar, sumar, divi} from "./ejercicio_9.mjs";
import {usuario } from "./ejercicio_9.mjs";

let sum = sumar(5, 5)
let mul = multi(5, 5)
let rest = restar(5, 3)
let div = divi(100, 3)

console.log(`Su suma es: ${sum}`); 
console.log(`Su multiplicación es: ${mul}`); 
console.log(`Su resta es: ${rest}`);
console.log(`Su division es: ${div}`);
console.log(usuario); 