let num = 5
div5 = num % 5
div3 = num % 3
if(div3 == 0 ){
    console.log("Su numero es divisible entre 3");
}
else if(div5 == 0 ){
    console.log("Su numero es divisible entre 5");
}
else if(div3 == 0 && div5 == 0){
    console.log("Su numero es divisible entre 3 y 5");
}