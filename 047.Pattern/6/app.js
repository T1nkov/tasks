// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  try {
    if (!input.value) throw new Error("Empty input");
    const arr = [];
    arr.push(input.value);
    p.innerHTML += `${arr}, `;
    input.value = "";
  } catch (error) {
    alert(error.message);
  }
});
