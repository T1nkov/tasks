// На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3.

let num = 233;

let arr = [];

for (let i = 0; i < num.lenght; i++) {
  if (num[i] % 3 === 0) {
    arr += num[i];
  }
}
console.log(arr);
