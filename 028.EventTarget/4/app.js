// . По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

const btn = document.querySelector("button");
const p = document.querySelector("p");
btn.addEventListener("mouseover", function (event) {
  p.innerHTML = "hi";
});

btn.addEventListener("mouseout", function (event) {
  p.innerHTML = "";
});
