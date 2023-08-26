// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

let n = prompt("kolvo");

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("elem"));
}

let res = arr.every(function (elem) {
  if (!isNaN(elem)) {
    return true;
  } else {
    return false;
  }
});
console.log(res);

// let res = false

// arr.forEach(function(elem){
//     if(!isNaN(elem)){
//       res = true
//     }else{
//         res = false

//     }
// })
