// 1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

const arr = [];

button.addEventListener("click", function () {
  try {
    if(isNaN(input.value)) throw new Error ('не число')
    if(!input.value) throw new Error ('пусто')
    arr.push(input.value);
    const sum = arr.reduce((sum, el) => {
      return sum + +el;
    }, 0);

    p.textContent = sum / arr.length;
    input.value = "";
  } catch (error) {
    alert(error.message);
  }
});
