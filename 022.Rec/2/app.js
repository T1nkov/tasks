// Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя
// рекурсию
let i = 5;

function factorial(i) {
  if (i == 0) return 0;
  if (i % 2 == 0) return `${i}` + factorial(i - 1);
  else {
    return `` + factorial(i - 1);
  }
}

const res = factorial(i);
console.log(res);
