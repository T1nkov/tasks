// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [1, 2, 3, 4, 5, 12, 6, 7, 99];

function isValidNUM(arr) {
  const res = arr.every(function (el) {
    return typeof el === "number" ? true : false;
  });
  return res;
}

function maxNum(arr) {
  const res = isValidNUM(arr);
  let num = 0;
  if (res === true) {
    arr.forEach(function (el) {
      if (num < el) num = el;
    });
    return num;
  } else return "error";
}

const res = maxNum(arr);
console.log(res);
