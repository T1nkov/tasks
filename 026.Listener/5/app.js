// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи.

const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");
btn.addEventListener("click", function () {
  try {
    if (!input) throw new Error("input is empty");
    else if (input.value <= 0) throw new Error("number is small");
    const arr = [0, 1];
    for (let i = 2; i < input.value; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    p.innerHTML = arr;
  } catch (error) {
    alert(error.message);
  }
});
