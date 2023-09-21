// Напишите функцию findMax(arr), которая находит максимальное число в массиве
// arr. Используйте рекурсию.

arr = [2, 5, 3, 5, 7, 9];
let num = arr[0]


function findMax(arr) {
  if (!arr.length) return;
  if (arr[0] > num) { 
    num = arr[0];
  }
  findMax(arr.slice(1));
}

findMax(arr);

console.log(num);