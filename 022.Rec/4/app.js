// Отобразите четные числа от 5 до 0 по убываю используя рекурсию

let n = 0;

function getNumbers(n) {
  if (n === 5) return ``;
  if (n % 2 === 0) {
    return `${n}` + getNumbers(n + 1);
  } else {
    return " " + getNumbers(n + 1);
  }
}

const res = getNumbers(n);
console.log(res);
