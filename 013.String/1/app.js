// Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]

let a = prompt();

if (isNaN(a)) {
  console.log(a.split(""));
} else {
  //   if (a % 2 === 0) {
  //     console.log("четное");
  //   } else {
  //     console.log(нечетное);
  //   }

//   a % 2 === 0 ? console.log("chetnyy") : console.log("nechetnyy");
    console.log( a % 2 === 0 ?'chetny':'nechetny')
}
