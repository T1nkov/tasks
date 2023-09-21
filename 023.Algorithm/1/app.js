// Реализуйте функцию searchBinary, которая принимает два аргумента: число и
// массив чисел от 1 до 15 включительно. Функция должна вернуть индекс, если
// указанное число найдено в массиве, и выдать сообщение об ошибке, если число
// не обнаружено в массиве.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const n = 24;

function searchBinary(arr, n) {
  let left = 0;
  let right = arr.length;
  let result = false;
  for (let i = left; i < right; i++) {
    let middle = Math.round((left + right) / 2);
    if (arr[middle] == n) {
      console.log("вы угадали index" + middle);
      result = true;
      break;
    } else if (arr[middle] > n) {
      right = middle;
    } else {
      left = middle;
    }
  }

  if (result=== false ){
    console.log('число не найдено в массиве');
  }
}

searchBinary(arr, n);
