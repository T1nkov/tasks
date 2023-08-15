// Найдите максимальное значение в статичном массиве используя цикл.

let arr = [2, 3, 6, 4];

let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > result) {
    result = arr[i];
  }
}

console.log(result);
