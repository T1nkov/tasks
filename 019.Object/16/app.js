// На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
  id: prompt(""),
  age: prompt(""),
  name: prompt(""),
  color: prompt(""),
};

const arrNum = [];

const arrLetter = [];

for (let key in obj) {
  if (!isNaN(obj[key])) {
    arrNum.push(obj[key]);
  } else {
    arrLetter.push(obj[key]);
  }
}

console.log(arrNum, arrLetter);
