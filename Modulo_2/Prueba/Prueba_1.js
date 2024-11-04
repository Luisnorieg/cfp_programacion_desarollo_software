function Generacion(x) {
    const generaciones = {
        '-3': { 'M': 'bisabuelo', 'F': 'bisabuela' },
        '-2': { 'M': 'abuelo', 'F': 'abuela' },
        '-1': { 'M': 'padre', 'F': 'madre' },
        '0': 'Me',
        '1': { 'M': 'hijo', 'F': 'hija' },
        '2': { 'M': 'nieto', 'F': 'nieta' },
        '3': { 'M': 'bisnieto', 'F': 'bisnieta' }
    };

    const genero = x < 0 ? 'M' : 'F';

    if (x === 0) {
        return generaciones['0'];
    } else if (x in generaciones) {
        return generaciones[x][genero];
    } else {
        return 'Generación desconocida';
    }
}


console.log(Generacion(-3));
console.log(Generacion(1));
console.log(Generacion(0));
