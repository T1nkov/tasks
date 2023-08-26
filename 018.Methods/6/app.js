// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some

let n = +prompt("kolvo");

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(prompt("vvedi elem"));
}

let res = arr.some(function (elem) {
  if (!isNaN(elem)) {
    return true;
  } else {
    return false;
  }
});

console.log(res);
