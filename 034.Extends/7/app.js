// Вывести в строчку все вводимые значения через инпут в виде массива, а также
// все удвоенные значения данного массива в div ниже. Добавить проверку, что
// поле не пустое

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const input = document.querySelector("input");
  const p = document.querySelector("p");
  const div = document.querySelector("div");
  try {
    if (!input.value) throw new Error("Empty input");
    const arr = [];
    arr.push(input.value);
    p.innerHTML += `${arr}, `;
    input.value = "";
console.log(arr);
    div.innerHTML = arr.map((el) => {
      if (!isNaN(el)) el ** 2;
    });
  } catch (error) {
    alert(error.message);
  }
});
