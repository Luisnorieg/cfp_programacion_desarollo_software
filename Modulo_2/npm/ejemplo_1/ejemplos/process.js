console.log(process.argv)

console.log('Hola Bienvenido ${process.argv[1]}');

process.on('exit', () => {
    console.log('El proceso va a termiar');
});

console.log(process.cwd());

console.log(process.env.HOSTNAME);
