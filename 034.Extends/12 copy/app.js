// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку необходимо получить значение из инпута. Проверить, что это число > 0, а также, добавить проверку на ввод только чисел. Если проверка true, то вывести в div удвоенное значение инпута

const btn = document.querySelector("button");
const inp = document.querySelector("input");

const div = document.querySelector("div");

btn.addEventListener("click", () => {
  try {
    if (isNaN(inp.value)) throw new Error("not anumber");
    if (inp.value < 0) throw new Error("small num");
    div.innerHTML = inp.value * 2;
  } catch (error) {
    alert(error.message);
  }
});
