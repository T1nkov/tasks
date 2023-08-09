// Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
// 'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
// задачу через switch-case.
let a = +prompt();

if (Number.isInteger(a)) {
  switch (a) {
    case 1:
      alert("zima");
      break
    case 2:
      alert("vesna");
      break
    case 3:
      alert("leto");
      break
    case 4:
      alert("osen");
      break
  }
} else {
  alert("errror");
}
