const fs = require('node:fs')

const stats = fs.statSync('texto.txt')
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats.size);

let data3 = fs.readFileSync('texto.txt', 'utf-8')
console.log(data);

fs.readFile('mucho_texto.txt', 'utf-8',
    () =>{
        console.log('Archivo leido');
    }
);
console.log('----------');
let data = fs.readFile('texto.txt', 'utf-8', 
(err, data) => {
    if (err){
        console.log('Este es el error 111 $(err)');
        return;
    }
    console.log(data);
});
console.log('-------9090');

let data2 = fs.readFile('text.txt', 'utf-8',
    (err, data2) => {
    if (err){
        console.log('Este es el error 111 $(err)');
        return;
    }
    console.log(data2);
})
console.log('--------1010');
