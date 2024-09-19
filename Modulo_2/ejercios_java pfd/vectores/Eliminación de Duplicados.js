let array1 = [2,4,6,4,6,7,3,8,9,11,1,1];

const sinDuplicados = Array.from(new Set(array1));
sinDuplicados.sort(function(a, b) { return a - b; });

console.log(sinDuplicados);