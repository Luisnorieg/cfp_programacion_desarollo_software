let ran=(min, max)=>{
    return Math.floor(Math.random()* (max-min)+min);
}

let arreglo_par=[];
let promedio=0;

let sum=0;

for(i=0; i<=6; i++){
    arreglo_par[i]=ran(1, 10);
    console.log(arreglo_par);
    if(arreglo_par[i]%2===0){
        sum=sum+arreglo_par[i]
    }
}
console.log('los pares encontrados son'+ sum);