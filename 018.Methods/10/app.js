// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

let n = 5;

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(prompt());
}

// let res = arr.map(function (elem) {
//   if (elem % 2 === 0) {
//     return 'чет';
//   }else{
//       return 'нечет'
//   }
// });

// console.log(res);

let newArr = [];

arr.forEach(function (elem) {
  if (elem % 2 === 0) {
    newArr.push("чет");
  } else {
    newArr.push("нечет");
  }
});

console.log(newArr);
