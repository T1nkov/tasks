// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");
const arr = [];
const obj = {};

button.addEventListener("click", () => {
  try {
    arr.push(input.value);
    for (let i = 0; i < arr.length; i++) {
      obj[i] = arr[i];
    }
    p.textContent = JSON.stringify(obj);
    input.value = "";
  } catch (error) {
    alert(error.message);
  }
});
