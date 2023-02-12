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

const array = [1, 2, 3, 4, 5, 6, 7];

const remove = (arr, callback) => {
  let newArray = [];
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? newArray.push(arr[i]) : evens.push(arr[i]);
  }
  console.log(newArray, evens)
};

const condition  = (item) => {
  return item % 2 !== 0;
};

remove(array, condition)