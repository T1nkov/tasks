// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

let str = "fullstack";
let gl = "eyuoia";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (gl.includes(str[i])) {
    result += str[i];
  }
}
console.log(result);
