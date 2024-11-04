const añadir1 = function(n) {
    return function(x) {
        return x + n;
    };
};

const añadir2 = añadir1(5);

adds1  = añadir1(1)

console.log(adds1(10)); 

