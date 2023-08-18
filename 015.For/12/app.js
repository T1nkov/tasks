// Найдите минимальное значение в массиве используя цикл

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -123, -12482342, -23];

let num = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (num > arr[i]) {
    num = arr[i];
  }
}
console.log(num);
