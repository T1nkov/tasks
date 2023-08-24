// Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let nArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!nArr.includes(arr[i])) {
    nArr.push(arr[i]);
  }
}

console.log(nArr);
/////

let arr2 = [];
for (let num of arr) {
  if (!arr2.includes(num)) {
    arr2.push(num);
  }
}

console.log(arr2);