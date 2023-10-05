// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector("p");
const arr = [];
btn.addEventListener("click", function () {
  if (!input.value) {
    p.textContent = "Ошибка";
    p.style.color = "red";
  } else {
    arr.push(input.value);
    p.textContent = arr;
    input.value = "";
  }
});
