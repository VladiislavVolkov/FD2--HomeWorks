// Треугольник 

for (let i = '#'; i.length <= 7; i += '#') {
    console.log(i);
}



// Шахматная доска

let i = '';
for (let a = 0; a < 8; a++) {
  for (let b = 0; b < 8; b++) {
    if ((a + b) % 2 !== 0)
      i += ' ';
    else
      i += '#';
  }
  i += '\n';
}
console.log(i);



// Число 100

let number
do {
  number = prompt('Введите число и узнаете угадали ли Вы его!');
  if (number === null) {
    alert('Жаль, что покидаете нас ...')
    break
  }
  if (number > 100) {
    alert('Ура, Вы угадали!')
  }
  if (number <= 100) {
    alert('Попробуйте еще раз. У Вас получится!')
  }
} while (number <= 100)