// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt.

let lenArr = +prompt("Введи кол-во элементов");

let newArr = [];

for (let i = 0; i < lenArr; i++) {
  let num = prompt("Введи элемент массива");
  newArr.push(num);
}

console.log(newArr);
