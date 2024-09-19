let ran=(min, max)=>{
    return Math.floor(Math.random()*(max-min)+min)
}

let arreglo_numero=[];

for( i=0; i<=10; i++){
    arreglo_numero[i]=ran(1,10);
    console.log(arreglo_numero);
    
}
console.log("El promedio de los alumnos es: " +  arreglo_numero.reduce((a,b) => a+b)/ 10);