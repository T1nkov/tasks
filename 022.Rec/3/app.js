// На входе число n = 5. Вычислите сумму натуральных чисел от 1 до n используя
// рекурсию

let i = 5;

function sumNum(i) {
  if (i === 0) return 0;
  return i + sumNum(i - 1);
}

const res = sumNum (i)


console.log(res);