// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

let arr = [10, 20, 30, 50, 235, 3000];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10 && arr[i] <= 99) {
    if (
      Math.floor(arr[i] / 10) === 1 ||
      Math.floor(arr[i] / 10) === 2 ||
      Math.floor(arr[i] / 10) === 5
    ) {
      newArr.push(arr[i]);
    }
  } else if (arr[i] >= 100 && arr[i] <= 999) {
    if (
        Math.floor(arr[i] / 100) == 1 ||
        Math.floor(arr[i] / 100) == 2 ||
        Math.floor(arr[i] / 100) == 5
      ) {
        newArr.push(arr[i]);
      }
  } else if (arr[i] >= 1000) {
    if (
        Math.floor(arr[i] / 1000) == 1 ||
        Math.floor(arr[i] / 1000) == 2 ||
        Math.floor(arr[i] / 1000) == 5
      ) {
        newArr.push(arr[i]);
      }
  }
}

console.log(newArr);
