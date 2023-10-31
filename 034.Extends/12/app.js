// На входе n – количество элементов массива.
// Далее производится заполнение массива с клавиатуры.
//  Необходимо создать функцию возвращающую новый массив из элементов,
//  каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const arr = [];
const newArr = [];
const n = 4;

function getArr() {
  for (let i = 0; i < n; i++) {
    arr.push(prompt("input str"));
  }
}

function modeArr() {
  arr.map((el) => {
    newArr.push(`#${el}`);
  });
}

getArr();
const res = modeArr();
console.log(newArr);
// const res = modeArr();
// console.log(newArr);