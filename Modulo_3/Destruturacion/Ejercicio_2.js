function Colors(colors) {
    let firstColor = colors[0] || null; 
    let secondColor = colors[1] || 'blue'; 

    return {
        firstColor: firstColor,
        secondColor: secondColor
    };
}


let colorsArray1 = ['red', 'green'];
let colorsArray2 = ['red'];

console.log(Colors(colorsArray1));
console.log(Colors(colorsArray2)); 