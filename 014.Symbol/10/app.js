// . Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.

let number = 34575;

for (let i = 0; i < 3; i++) {
  console.log(Math.sqrt(number).toFixed(i));
}
