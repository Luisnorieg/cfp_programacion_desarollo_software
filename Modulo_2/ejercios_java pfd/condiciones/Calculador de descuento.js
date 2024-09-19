let precio = 1900
descuento = 10 * precio / 100

if(precio > 100){
    console.log("El precio del producto es:", precio);
    console.log("Su descuento es de:", descuento);
    console.log("El precio con descuento:", precio - descuento);
}
else if(precio <= 100){
    console.log("Su producto no tine descuento");
    console.log("El precio es:", precio);
}