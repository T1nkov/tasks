// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка

const img = document.querySelector("div");

img.addEventListener("mouseover", function () {
  this.style = " background: url(./2.jpeg); height: 1600px; width: 2560px;";
});

img.addEventListener("mouseout", function () {
    this.style = " background: url(./1.jpeg); height: 1600px; width: 2560px;";
  });
  