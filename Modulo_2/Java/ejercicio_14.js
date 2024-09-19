class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otra) {
    return new Vec(this.x + otra.x, this.y + otra.y);
  }

  minus(otra) {
    return new Vec(this.x - otra.x, this.y - otra.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
  
console.log(new Vec(9, 2).plus(new Vec(2, 7)));

console.log(new Vec(9, 2).minus(new Vec(2, 7)));

console.log(new Vec(3, 4).length);
