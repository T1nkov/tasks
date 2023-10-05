// На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const list = document.querySelector("ul");
const p = document.querySelector("p");

list.addEventListener("click", function (event) {
  p.innerHTML = event.target.textContent;
});
