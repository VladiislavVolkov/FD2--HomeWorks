/* 
Разработать «чистую» функцию treeSum, 
которая получает массив, элементы которого могут быть числами или снова массивами, 
и так до любого уровня.
Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней.
При написании функции не описывать каких-либо вложенных в неё функций.
*/

const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

const treeSum = (arr) => {
    const result = arr.reduce((acc, item) => {
        if (!Array.isArray(item)) {
            return acc += item;
        } else {
            return acc += treeSum(item);
        }
    }, 0);
    return result;
};

console.log(treeSum(arr));
