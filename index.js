// Треугольник в цикле

for (let i = '#'; i.length <= 7; i += '#') {
    console.log(i);
}



// Шахматная доска

let i = "";
for (let a = 0; a < 8; a++) {
  for (let b = 0; b < 8; b++) {
    if ((a + b) % 2 !== 0)
      i += " ";
    else
      i += "#";
  }
  i += "\n";
}
console.log(i);