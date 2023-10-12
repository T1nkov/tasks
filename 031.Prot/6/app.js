// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//   от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
//   не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
//   преобразовать строку в ...) JSON
const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

const obj = {};

button.addEventListener("click", () => {
  try {
    for (let i = 0; i < 1 + +input.value; i++) {
      obj[i] = ++i;
    }
    p.textContent = JSON.stringify(obj);
  } catch (error) {}
});

button.addEventListener("dblclick", () => {
  try {
    p.textContent = "";
  } catch (error) {}
});
