// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна

const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

class DomHtml {
  constructor() {
    this.middleware();
  }
  middleware = () => {
    try {
      if (!/^[a-zA-Z0-9,-]$/gm.test.input.value) throw new Error("false");
      else p.textContent = "true";
    } catch (error) {
      p.textContent = error.message;
    }
  };
}
