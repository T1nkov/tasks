// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [1, 2, 3, 4, 5];

function isValidNUM(arr) {
  const res = arr.every(function (el) {
    return !isNaN(el) ? true : false;
  });
  return res;
}

function updateNum(arr) {
  const res = isValidNUM(arr);
  if (res === true) {
    const nums = arr.map(function (el) {
      return el ** 2;
    });
    return nums
  } else {
    return false;
  }
}

const res = updateNum(arr);


