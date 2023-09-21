// Напишите функцию countNumbers(arr), которая считает количество чисел в
// массиве arr. Используйте рекурсию.

const arr = [1, 2, 3, 5, 6];

let num = 0;

function countNumbers(arr) {
  if (!arr.length) return;
  if (arr[0]) {
    num++;
  }
  countNumbers(arr.slice(1));
}

countNumbers(arr);
console.log(num);
