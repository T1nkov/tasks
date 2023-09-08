// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

const arr = [1, 2, 3, 4, 5, 6, 78, 9, 'sdf'];

function checkNumber(arr) {
  let res = arr.every(function (el) {
    if (!isNaN(el)) return true;
    else return false;
  });
  return res;
}

function getSum(arr) {
  const check = checkNumber(arr);
  if (check === true) {
    let res = arr.reduce(function (sum, el) {
      return sum + el;
    }, 0);
    return res;
  }else return 'error';
}

const res = getSum(arr);
console.log(res);
