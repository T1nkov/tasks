// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

const n = 5;

function doArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(+prompt(""));
  }
  return arr;
}

function isValidNUM(arr) {
  const res = arr.every(function (el) {
    return typeof el === "number" ? true : false;
  });
  return res;
}

function multiplyArr(arr) {
  const bool = isValidNUM(arr);
  if (bool === true) return arr.reduce((middle, el) => middle * el, 1);
  else return "error";
}

const arr = doArr(n);

const mult = multiplyArr(arr);

console.log(mult);
