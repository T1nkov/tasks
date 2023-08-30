// На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = 5;

const arr = [];

const value = "javascript";
for (let i = 0; i < n; i++) {
  let str = prompt("");
  if (isNaN(str)) {
    arr.push(str);
  } else {
    continue;
  }
}

const res = arr.filter(function (elem) {
  return arr.includes(value);
});

console.log(res);
