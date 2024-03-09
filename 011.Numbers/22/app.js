// const res = arr.reduce((sum, el) => {
//   if (el % 2 == 0) {
//     sum += el;
//   }
//   return sum;
// }, 0);

// console.log(res);

// function doSum(arr) {
//   if (arr.length == 1) return arr[0];
//   return arr[0] + doSum(arr.slice(1));
// }

// console.log(doSum(arr));

const arr = [1, 1, 1, 1, 1, 2, 3, 4, 4];
const uniqArr = [];
class A {
  uniq = (arr, uniqArr) => {
    for (let i = 0; i < arr.length; i++) {
      if (!uniqArr.includes(arr[i])) {
        uniqArr.push(arr[i]);
      }
    }
    return uniqArr;
  };
}

const b = new A();

console.log(b.uniq(arr, uniqArr));
