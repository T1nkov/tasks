// Необходимо отобразить кнопку и инпут
//  со значением по умолчанию. По клику на
// кнопку заменить значение инпута

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  try {
    input.value = "???";
  } catch (error) {
    alert(error.message);
  }
});
