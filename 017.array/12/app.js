// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while

let arr = [2, 5, 9, 15, 0, 4];
let i = 0;

let newArr = []
while (i < arr.length) {
  if (arr[i] % 5 === 0){
    newArr.push(arr[i]);
  } i++;
}

console.log(newArr);