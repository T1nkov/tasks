// Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.

const btn = document.querySelector("button");

const p = document.querySelector("p");

let flag = false;
btn.addEventListener("click", (event) => {
  if (flag === false) {
    p.style = "visibility: hidden";
    event.currentTarget.textContent = "скрыть";
    flag = true;
  } else {
    p.style = "visability: visible";
    event.currentTarget.textContent = "показать";
    flag = false;
  }
});
