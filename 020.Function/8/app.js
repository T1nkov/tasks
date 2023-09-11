// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ["sad", "doll", "mom"];

function isValidSTR(arr) {
  const res = arr.every(function (el) {
    return typeof el === "string" ? true : false;
  });
  return res
}

function returnArr(arr) {
  const res = isValidSTR(arr);
  console.log(res);
  return res === true ? arr.join() : false;
}

const res = returnArr(arr);

console.log(res);
