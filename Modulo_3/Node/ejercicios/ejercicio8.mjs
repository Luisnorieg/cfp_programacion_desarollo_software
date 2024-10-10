// Importar el módulo 'os'
const os = require('os');

// Obtener información del sistema operativo
console.log('Nombre del sistema operativo:', os.type());
console.log('Versión del sistema operativo:', os.release());
console.log('Memoria total:', os.totalmem());
console.log('Memoria libre:', os.freemem());
