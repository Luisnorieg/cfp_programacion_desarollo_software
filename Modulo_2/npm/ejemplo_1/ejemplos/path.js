const path = require('node:path');

console.log(path.sep);

let newPath = path.join('C:\Users\luisnoriega\Desktop\modulo_onu\cfp_programacion_desarollo_software\Modulo_1\HTML', 'miami.png');
console.log(newPath);

let fileName = path.basename(newPath);
console.log(fileName);


let dirname = path.dirname(newPath);
console.log(dirname);

let extname = path.extname(newPath);
console.log(extname);