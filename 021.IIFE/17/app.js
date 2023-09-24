// const isSquare = function (n) {
//   if (Math.sqrt(n) >= 0 && Number.isInteger(Math.sqrt(n))) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isSquare(3));

// // Завершите решение так, чтобы строка разбивалась на пары по два символа. Если строка содержит нечетное количество символов, необходимо заменить отсутствующий второй символ последней пары подчеркиванием («_»).

// const str = "absdedf";

// const arr = [];

// function solution(str) {
//   const arr = [];
//   let letter = "";
//   for (let i = 0; i < str.length; i++) {
//     if (letter.length <= 2) {
//       letter += str[i];
//     }

//     if (letter.length === 2) {
//     }
//     letter = "";
//   }
// }

// solution(str);

// const cc = "Nananananananananfdsfasdfsdfsdfsdfananananananana Batman";

// function maskify(cc) {
//   return cc.replace(/.(?=....)/g, "#");
// }
// const res = maskify(cc);

// console.log(res);
// // const n = 4;
// // function maskify(pass, n) {
// //   if (pass.length > n) {
// //     const hide = pass.length - n;
// //     let hidePass = "";
// //     for (let i = 0; i < hide; i++) {
// //       hidePass += "#";
// //     }
// //     hidePass += pass.substr(pass.length - n);
// //     return hidePass;
// //   } else if (pass.length <= n) {
// //     return pass;
// //   }
// // }

// // const res = maskify(pass, n);

// // console.log(res);

const arr = [1, 1, 1, 1, 1, 2, 1, 1, 1, 1];

let num = arr[0];
function findUniq(arr, num) {
  const newArr = [];
  let correctNum = "";
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) newArr.push(arr[i]);
    else correctNum = arr[i];
  }
  return correctNum;
}

const res = findUniq(arr, num);
console.log(res);
