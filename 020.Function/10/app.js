// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isValidNUM(arr) {
  const res = arr.every(function (el) {
    return !isNaN(el) ? true : false;
  });
  return res;
}

function evenNums(arr) {
  const res = isValidNUM(arr);
  if (res === true) {
    const even = arr.filter((element) => {
      const newArr = [];
      if (element % 2 === 0) {
        return newArr.push(element);
      }
    });
    return even;
  }
}

const res = evenNums(arr);
console.log(res);
