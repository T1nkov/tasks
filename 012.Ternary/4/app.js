// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)

// isNaN    - првоерить чьо внутри строки буква или число

const a = prompt();

if (isNaN(a)) {
  console.log(true);
} else {
  console.log(false);
}

isNaN(a) ? console.log(true) : console.log(false);
