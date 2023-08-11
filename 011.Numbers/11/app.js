// Напишите программу, в которой вычисляется сумма, разность и произведение
// двух целых чисел, введенных с клавиатуры

const a = Number(prompt("Введите первое число")).toFixed(0);

const b = Number(prompt("Введите второе число")).toFixed(0);

const c = prompt("введите знак");

console.log(c);

if (c == "+") {
  alert(Number(a) + Number(b));
}
if (c == "-") {
  alert(Number(a) - Number(b));
}
if (c == "/" && b != 0) {
  alert(Number(a) / Number(b));
}
if (c == "*") {
  alert(Number(a) * Number(b));
} else {
  alert("ошибся ты");
}
