// Напишите функцию, которая принимает строку из чисел ‘12345’ и возвращает
// значение в обратном порядке ‘54321’. IIFE

(function () {
  let nums = "12345";
  console.log(nums.split("").reverse().join(""));
})();

// const numAnalizer = {
//   nums: '12345',
//   reverseNums: (function(){
//     this.nums.split('').reverse().join('')

// console.log(this.nums);
//   }()),

// }
