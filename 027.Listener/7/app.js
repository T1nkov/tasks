const btn = document.querySelector("button");
const input = document.querySelector("input");
const res = document.querySelector("p");
btn.addEventListener("click", function () {
  try {
    res.innerHTML = input.value * 2;
  } catch (error) {
    alert(error.message);
  }
});
