// На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке

let num = 100;

let arr = [];
if (!isNaN(num)) {
  for (let i = 1; i < num; i++) {
    arr.push(i);
  }
} else {
  console.log("error");
}

arr.push(num);
console.log(arr);

let arr2 = 0;
