// Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
// цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,
// то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
// всех чисел до введенного

let arr = [1, 3, 2, 5, 7, 6];

let num = 45;

let ishere = false;

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    ishere = true;
    break;
  }
}

if (ishere === true) {
  console.log("число найдено цикл остановлен");
} else {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum = sum / arr.length;
  console.log(sum);
}
