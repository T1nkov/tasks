// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

let arr1 = [];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr1.length < 5) {
    arr1.push(arr[i]);
  } else {
    arr2.push(arr[i]);
  }
}

if (arr1.toString() == arr2.toString()) {
  console.log(true);
} else {
  console.log(false);
}

console.log(arr1, arr2);
