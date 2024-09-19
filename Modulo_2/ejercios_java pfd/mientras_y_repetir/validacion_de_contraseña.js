let conseguirRandom=(min, max)=>{
    return Math.floor(Math.random()*(max - min) + min)
}

let numero=conseguirRandom(1,120);
let cotrasenia= 56;
let suma=0;

while (numero != cotrasenia){
    numero=conseguirRandom(1,120);
    console.log(numero);
    console.log(cotrasenia);
    suma +=1
}

if(suma>=10){
    console.log('usuario bloqueado,' + suma + 'intentos fallidos');
}else{
    console.log('bienvenido');
}