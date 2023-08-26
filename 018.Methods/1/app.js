// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

let arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(prompt("введи элемент массива"));
}

const res_1 = arr.filter(function (elem) {
  if (!isNaN(elem)) {
    return true;
  } else {
    return false;
  }
});

if (res_1.length === 0) {
  console.log("массив пуст");
} else {
  console.log(res_1);
}
