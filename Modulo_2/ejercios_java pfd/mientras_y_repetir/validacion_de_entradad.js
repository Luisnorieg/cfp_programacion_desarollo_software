let conseguir = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let numero = conseguir(90,101)
contador = 0;

do {
    numero = conseguir(90,101)
    console.log(numero);
    console.log("Contraseña invalida");
    contador += 1

} while (numero != 100);
console.log("Contraseña valida");
