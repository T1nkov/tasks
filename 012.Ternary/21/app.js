// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста

let str = prompt();
console.log(str);

if (isNaN(str)) {
  str.split("");
  console.log(`это строка`);
} else {
  console.log(`не строка`);
}
