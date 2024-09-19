let size = 8;

let board = "";

for (let i = 0; i < size; i++) {
  for (let v = 0; v < size; v++) {
    if ((i + v) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);