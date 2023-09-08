// На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 2, 3, 4, 5, 6, 7, 8, "dsf"];

const res = arr.every(function (el) {
  if (!isNaN(el)) return true;
  else return false;
});

console.log(res);
