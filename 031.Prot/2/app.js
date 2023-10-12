// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const input = document.querySelector("input");
const button = document.querySelector("button");
const pArr = document.querySelector("#arr");
const uniqArr = document.querySelector("#uniqArr");

const arr = [];

button.addEventListener("click", () => {
  try {
    if (!input.value) throw new Error("empty");
    arr.push(input.value);
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!resArr.includes(arr[i])) resArr.push(arr[i]);
    }
    pArr.textContent = arr;
    uniqArr.textContent = resArr;
  } catch (error) {
    alert(error.message);
  }
});
