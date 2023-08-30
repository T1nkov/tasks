// Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread

const n = 6;

const arr1 = [];

const arr2 = [];

for (let i = 0; i < n; i++) {
  if (i < 3) {
    arr1.push(prompt(""));
  } else {
    arr2.push(prompt(""));
  }
}

console.log(arr1);

const arr = [...arr1, ...arr2];

console.log(arr);
