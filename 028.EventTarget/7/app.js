// Создайте форму с выпадающим списком для выбора единицы измерения
// (например, дюймы, сантиметры, метры). При выборе единицы измерения
// отображайте соответствующее значение.

const btn = document.querySelector("button");
const div = document.querySelector("div");
let flag = false;

btn.addEventListener("click", function () {
  if (flag === false) {
    div.style = "visibility: visible";
    flag = true;
  } else {
    div.style = "visibility: hidden";
    flag = false;
  }
});

div.addEventListener("click", function (event) {
  btn.textContent = event.target.textContent;
  div.style = "visibility: hidden";
  flag = false;
});
