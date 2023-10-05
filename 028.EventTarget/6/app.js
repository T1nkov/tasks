// Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const btn = document.querySelector("button");
const obj = {};
const pass = "12345";
btn.addEventListener("click", function () {
  try {
    if (!name.value || !email.value || !pwd.value)
      throw new Error("input is empty");
    if (!/^[a-zA-Z0-9\_\-\.]+@[a-z]+\.[a-z]+/g.test(email.value))
      throw new Error("неверный эмаил");
    if (!/^[\w]{8,}$/gm.test(pwd.value)) throw new Error("неверный пасс");
   if(!isNaN(name.value )) throw new Error("неверный пасс");
  } catch (error) {}
});

console.log(obj);
