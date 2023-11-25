/* 
3. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
соответствует шаблону вида хх-хх-хххх. Реализовать Html: input, button, div (для
отображения результата проверки регулярного выражения) 
 */

class html {
  isValidData() {
    const inp = document.querySelector("input");
    const btn = document.querySelector("button");
    const p = document.querySelector("p");
    btn.addEventListener("click", () => {
      inp.value.match("/^[0-9]{2}-[0-9]{2}-[1-2][0-9]{3}$/gm")
        ? (p.innerHTML = true)
        : (p.innerHTML = false);
    });
  }
}

const html = new Html();
html.isValidData();
