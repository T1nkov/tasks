// *Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу.

const btn = document.querySelector("button");

const input = document.querySelector("input");

const tbody = document.querySelector("tbody");

const arr = [];
btn.addEventListener("click", function (event) {
  try {
    if (!input.value) throw new Error("input is empty");
    const tr = document.createElement("tr");
   
    const td = document.createElement("td");
    td.textContent = input.value;
   
    tr.appendChild(td);
   
    tbody.appendChild(tr);
    input.value = "";
  } catch (error) {
    alert(error.message);
  }
});
