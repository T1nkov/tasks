// Необходимо отобразить кнопку с надписью «Нажми на меня»
//  и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  try {
    if (!input.value) throw new Error("input is empty");
    alert(input.value);
  } catch (error) {
    alert(error.message);
  }
});
