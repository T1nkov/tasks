// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

const n = 5;

const arr = [];

let arr2 = [];
for (let i = 0; i < n; i++) {
  let num = prompt("");

  if (!isNaN(num)) {
    arr.push(+num);
  }
}

// const res = arr.map(function(elem){
//   return elem**2
// })

// console.log(res);

// arr.forEach(function (elem) {

//   arr2.push(elem**2)
// });

// console.log(arr2);

// for(let i = 0; i<arr.length;i++){
//   arr2.push(arr[i]**2)
// }

// console.log(arr2);

let i = 0;

while (i < arr.length) {
  arr2.push(arr[i] ** 2);

  i++;
}

// for (let elem of arr) {
//   arr2.push(elem ** 2);
// }

console.log(arr2);
