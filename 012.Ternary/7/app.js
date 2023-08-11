// Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
// ними равно S км. Добавить проверку на ввод только чисел

const v1 = +prompt();
const v2 = +prompt();
const s = +prompt();

if (isNaN(v1 && v2 && s)) {
  console.log("error");
} else {
  console.log(s / (v1 + v2));
}

isNaN(v1 && v2 && s) ? console.log("error") : console.log(s / (v1 + v2));
