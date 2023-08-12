// Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы

let str = 'lalalalala'.trim();

if (isNaN(str)) {
  console.log(str[0].toUpperCase());
} else {
  console.log("error");
}

console.log(isNaN(str) ? str[0].toUpperCase() : "error");

!isNaN(str) ? console.log(str[0].toUpperCase()) : console.log("error");

if (isNaN(str)) console.log(str[0].toUpperCase());
else console.log("error");

////

if (isNaN(str)) {
  console.log(str[0].toUpperCase() + str.slice(1));
} else {
  console.log("error");
}
