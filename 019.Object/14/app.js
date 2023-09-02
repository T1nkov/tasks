// На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения
// {       {
// 0 : 7,     0 : 7,
// 1 : 7,     1 : 6,
// 2 : 6,     2 : 5,
// 3 : 5, ->  3 : 2,
// 4 : 2,     4 : 1
// 5 : 2 }
// 6 : 1
// }

let num = "";

const obj = {
  0: 7,
  1: 7,
  2: 6,
  3: 5,
  4: 2,
  5: 2,
  6: 1,
};
const newObj = {

}
const nArr = [];

const uniqArr = [];

for (const key in obj) {
  nArr.push(obj[key]);
}

for (let i = 0; i < nArr.length; i++) {
  if (!uniqArr.includes(nArr[i])) {
    uniqArr.push(nArr[i]);
  }
}
// console.log(uniqArr);


// for (let i = 0; i < uniqArr.length; i++) {
//   newObj[i] = uniqArr[i];
// }
const res = {}
nArr.forEach(function(elem, index){
      res[index] = elem

});

console.log(res);
