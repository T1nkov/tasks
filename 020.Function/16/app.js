// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

const n = 5;

function doArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(+prompt(""));
  }
  return arr;
}

function isValidNUM(arr) {
  const res = arr.every((el) => (!isNaN(el) ? true : false));
  return res;
}

function genNewArr(arr) {
  const bool = isValidNUM(arr);
  if (bool === true) {
    const res = arr.map((el) => (el % 2 === 0 ? el * el : el));
    return res;
  } else {
    return "error";
  }
}

const arr = doArr(n);
const res = genNewArr(arr);
console.log(res);
