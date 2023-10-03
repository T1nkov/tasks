// . У вас есть кнопка. После нажатия поменять background.

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  try {
    if (body.style.background == "white") body.style.background = "black";
  else body.style.background = "white";
  } catch (error) {
    
  }
});
