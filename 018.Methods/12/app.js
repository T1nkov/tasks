// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter

let n = 4;

let arr = [];
for (let i = 0; i < n; i++) {
  let str = prompt("");
  if (isNaN(str)) {
    arr.push(str);
  }
}

const res = arr.filter(function (elem) {
  if (elem[0] === "h" || elem[0] === "a") {
    return elem;
  }
});

console.log(res);
