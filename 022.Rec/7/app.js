// Вычислить факториал числа используя рекурсию

let n = 5;

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
const res = factorial(n)
console.log(res);