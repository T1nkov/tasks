// . На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и второй
// массив, соответственно, с числами. forEach

const n = 5;
const arr = [];
const arrNum = [];
const arrStr = [];
for (let i = 0; i < n; i++) {
  arr.push(prompt(""));
}

arr.forEach(function (elem) {
  if (!isNaN(elem)) {
    arrNum.push(elem);
  } else {
    arrStr.push(elem);
  }
});

console.log(arrNum, arrStr, arr);
