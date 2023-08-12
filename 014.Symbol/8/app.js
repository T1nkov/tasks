// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false

let polindrom = "ana";

let polindrom2 = polindrom.split("").reverse().join("");

if (polindrom == polindrom2) console.log(true);
else console.log(false);

console.log(polindrom == polindrom2 ? true : false);
