// Пользователь вводит строку. Необходимо посчитать количество гласных

let str = "banana";
let gl = ["a", "e", "i", "o", "u", "y"];
let sum = 0;

for (i = 0; i < str.length; i++) {
  if (gl.includes(str[i])) {
    console.log(str[i], i);
    sum++
  }
}
console.log(sum);

// let str = "qwertyuiopwerettrhbvx";

// for (i = 0; i < str.length; i++) {
//   if (
//     str[i] == "a" ||
//     str[i] == "e" ||
//     str[i] == "u" ||
//     str[i] == "i" ||
//     str[i] == "o" ||
//     str[i] == "y"
//   ) {
//     console.log(str[i], i);
//   }
// }
