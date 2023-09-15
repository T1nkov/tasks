7; // На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

const n = +prompt("");

const len = +prompt("vvedi dlinny massiva");

function doArr(len) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(+prompt("fsadf"));
  }
  return arr;
}

const arr = doArr(len);
function filterArr(arr, n) {
  let res = arr.filter(function (el) {
    if (el > n) {
      return true;
    }
  });
  return res;
}

const filterNums = filterArr(arr, n);

console.log(filterNums);