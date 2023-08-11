// Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы
// 4

let str = prompt().toLowerCase().trim();

if (!isNaN(str)) {
  console.log(false);
} else {
  console.log(str.length);
}

//можно опустить скобки если одна инструкция 
if (!isNaN(str)) console.log(false);
else console.log(str.trim().toLowerCase().length);


console.log(!isNaN(str) ? false : str.trim().toLowerCase().length);
