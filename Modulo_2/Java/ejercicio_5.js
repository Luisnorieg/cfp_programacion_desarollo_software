function p_i(n) {
if (n == 0) return true;
else if (n == 1) return false;
else if (n < 0) return p_i(-n);
else return p_i(n - 2);
}

console.log(p_i(50));