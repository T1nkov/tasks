// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи.

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  try {
    const arr = [0, 1];
    if (input.value <= 0) throw new Error("small number");
    else if (isNaN(input.value)) throw new Error("not a number");
    for (let i = 2; i < input.value; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    alert(arr);
  } catch (error) {
    alert(error.message);
  }
});
