// . На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необходимо отловить на какой из элементов нажал
// пользователь и отобразить в div расположенном ниже маркированного списка

const list = document.querySelector("ul");

const div = document.querySelector("div");

list.addEventListener("click", (event) => {
  div.innerHTML = event.target.textContent;
});
