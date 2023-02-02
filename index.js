/* Функция №1 -  _.take
https://lodash.com/docs/4.17.15#take
*/

const array = [1, 2, 3, 4, 5, 6, 7];
const number = +prompt("Введите количество элементов в новом массиве.");

const take = (arr, num) => {
  const newArray = [];
  for (let i = 0; i < num; i++) {
    if (num < arr.length) {
      newArray.push(arr[i]);
    } else {
      num = arr.length;
      console.log("Число элементов изменили на количество элементов в исходном массиве!");
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

console.log(take(array, number))



/* Функция №2 -  _.remove
https://lodash.com/docs/4.17.15#remove
*/

