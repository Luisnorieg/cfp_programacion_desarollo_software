function pedir_num() {
    let num = 5;
    let fact = 1;
    let i = 1;

    while (i <= num) {
        fact = fact * i; 
    }

    let resultado = fact; 
    return resultado; 
}

let resultado = pedir_num();

console.log(resultado); 