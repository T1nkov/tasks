// Дано число 7, найдите все числа кратные 7 до 100

let num = 7;

let newArr = [];
for (let i = 0; i <= 100; i++) {
  if (i % 7 === 0) {
    newArr.push(i);
  }
}
console.log(newArr);