// Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки

const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

btn.addEventListener("click", function () {
  try {
    if (!input.value) throw new Error("пусто");
    if (input.value.split("").reverse().join("") === input.value) {
      p.textContent = `Результат это палиндром `;
    } else {
      p.textContent = `Результат это не палиндром `;
    }
  } catch (error) {
    console.log(error.message);
  }
});
