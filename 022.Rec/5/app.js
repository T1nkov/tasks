// На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию

let n = 2;
const step = 5;

function inStep(n, step) {
  if (step == 1) return n;
  return n * inStep(n, step - 1);
}

const res = inStep(n, step);
console.log(res);

