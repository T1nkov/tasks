// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1

let a = +prompt();

if (Number.isInteger) {
  alert(Math.floor(a / 100));
} else {
  alert("error");
}
