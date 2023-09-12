// Напишите функцию, которая принимает массив строк и находит строку с
// максимальной длиной. Добавить проверки

const arr = ["asfd", "sdfasd", "sadfsdfdsafasdf", "sdaf32qrasdasdasdasderfsd"];

let str = "";

// const searchLong = (arr, str) => {
//   for (let el of arr) {
//     if (el.lenght > str.length) {
//       str = el;
//     }
//     return str;
//   }
// };

// searchLong(arr, str);



searchLength = function (arr) {
  for (let el of arr) {
    let str = ''
    if (el.length > str.length) {
      str = el;
    }
    console.log(str);
  }
};
const res = searchLength(arr)
console.log(res);