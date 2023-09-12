// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива

const n = +prompt("number");
const arr = [];
function createArr(n) {
  for (let i = 0; i < n; i++) {
    arr.push(prompt("input"));
  }
  console.log(arr);
}

createArr(n);

function searchLenght(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter += 1;
  }
  console.log(counter);
}

searchLenght(arr);
