// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

let n = 5;
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(prompt());
}

let newArr = [];
let sum = 0;
arr.forEach(function (elem) {
  if (!isNaN(elem)) {
    newArr.push(elem);
  }
});

newArr.forEach(function (elem) {
  sum += Number(elem);
});

console.log(sum);

let sum1 = newArr.reduce(function (sum, elem) {
  return Number(sum) + Number(elem);
}, 0);

console.log(sum1);
