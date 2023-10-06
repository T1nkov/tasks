// *Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу.

const btn = document.querySelector("button");

const tbody = document.querySelector("tbody");

const input = document.querySelector("input");

const arr = [];
btn.addEventListener("click", function (event) {
  try {
    if (!input.value) throw new Error("input is empty");
    const secondItem = document.createElement("td");
    const text = document.createTextNode(input.value);
    secondItem.appendChild(text);
    arr.push(secondItem);

  } catch (error) {
    console.log(error.message);
  }
});
