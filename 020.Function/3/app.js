// Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

const str = prompt("").split(" ");
const arr = [];
function changeWord(word) {
  for (let i = 0; i < word.length; i++) {
    arr.push(str[i][0].toUpperCase() + str[i].slice(1));
  }
  console.log(arr.join(" "));
}

changeWord(str);


