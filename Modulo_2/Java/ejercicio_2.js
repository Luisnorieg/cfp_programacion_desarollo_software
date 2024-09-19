for(let num = 1; num <= 100; num ++) {
    let v = "";
    if (num % 3 == 0) v += "Fizz";
    if (num % 5 == 0) v += "Buzz";
    console.log(v || num);
}
