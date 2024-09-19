let producto = [
    ['Pantalon', 100, 'A'],
    ['Camisa', 85, 'B']],

    categoria = [
        ['A', 10],
        ['B', 5],
        ['C', 0]];

let descuento;
let resultado;

for (let f = 0; f < 2; f++) {
    for (let c = 0; c < 3; c++) {
        if (producto[f][2] == categoria[c][0]) {
            descuento = producto[f][1] * categoria[c][1] / 100;
            resultado = producto[f][1] - descuento;
            console.log(`${producto[f][0]},  |  ${categoria[c][1]} ${descuento} | ${resultado}`);
            c = 3
        }
    }
}