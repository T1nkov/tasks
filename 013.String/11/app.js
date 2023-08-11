// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

let str = "ban lox dima".trim();

console.log(str.length);
console.log(str.split(" ").splice(1).indexOf("lox"));

