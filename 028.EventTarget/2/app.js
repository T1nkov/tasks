// Создайте несколько элементов (например, кнопок) на странице. При клике на
// элемент, используйте event.target для определения на какой из элементов
// производилось действие и измените цвет.

const div = document.querySelector("div");
const body = document.querySelector("body");
div.addEventListener("click", (event) => {
  body.style = `background: ${event.target.textContent}`;
});
