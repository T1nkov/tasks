// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

let num = "55639217".split("");
let newNums = [];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 != 0 && num[i + 1] % 2 != 0) {
    newNums.push(num[i] );
    newNums.push(':')
  } else {
    newNums.push(num[i]);
  }
}
newNums.pop()
console.log(newNums.join(""));
