// По двойному клику на кнопку изменить цвет кнопки

const btn = document.querySelector("button");

btn.addEventListener("dblclick", function () {
  this.style = "background-color: green";
});
