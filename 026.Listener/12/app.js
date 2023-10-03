// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");
const arr = [];

// btn.addEventListener("click", function () {
//   try {
//     if (!input.value) throw new Error("input is empty");
//     if (!p.textContent) {
//       p.innerHTML += input.value;
//     } else {
//       p.innerHTML += "," + input.value;
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// });

btn.addEventListener("click", function () {
  try {
    if (!input.value) throw new Error("input is empty");
    arr.push(input.value)
    p.innerHTML = arr
    input.value = ''
  } catch (error) {
    alert(error.message);
  }
});
