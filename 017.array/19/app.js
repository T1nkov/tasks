// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

let num = +prompt("kolvo elementow");
let newArr = [];
for (let i = 0; i < num; i++) {
  let elem = prompt("el");
  if (!isNaN(elem)) {
    newArr.push(elem);
  }
}

console.log(newArr);
