// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

let n = 5;

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt(""));
}

// let newArr = []

// arr.forEach(function(elem){
//     newArr.push("#" + elem)
// })

// console.log(newArr);

let res = arr.map(function (elem) {
  return "#" + elem;
});

console.log(res);
