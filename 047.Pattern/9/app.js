// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

const n = 15;
const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.round(Math.random() * 101);
  }
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = arr[i];
    div.appendChild(li);
  }
  
});
function setArr() {
  const arr = [];
  const newArr = [];

  console.log(newArr);
  return arr;
}

const arr = setArr();
div.innerHTML = arr;
div.addEventListener("click", (event) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === event.target.textContent) arr.delete[i];
  }

  div.innerHTML = arr;
});
