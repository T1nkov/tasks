// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

let str = prompt();

str = str.toLowerCase().trim();

if (str === "hschool") {
  console.log(true);
} else {
  console.log(false);
}
