// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

let n = 5;

let arr = [];

let proizv = 1;

for (let i = 0; i < n; i++) {
  let num = prompt("vvedi");

  if (!isNaN(num)) {
    arr.push(num);
  }
}

// console.log(arr);

arr.forEach(function (elem) {
  proizv *= elem;
});

console.log(proizv);
