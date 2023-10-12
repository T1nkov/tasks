// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", () => {
  try {
    const arr = input.value.split(" ");
    const newArr = [];
    console.log(arr);
    newArr[0] = arr[0];
    for (let i = 1; i < +arr.length; i++) {
      newArr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    p.textContent = newArr.join("");
  } catch (error) {}
});
