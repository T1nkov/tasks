// Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо в отдельный div вывести все числа кратные 3

class HTML {
  changeaArr() {
    const inp = document.querySelector("input");
    const btn = document.querySelector("button");
    const div = document.querySelector("div");
    const p = document.querySelector("p");
    const arr = [];
    const arrT = [];

    btn.addEventListener("click", () => {
      try {
        if (!inp.value) throw new Error("empty");
        if (isNaN(inp.value)) throw new Error("isnot a number");
        if (inp.value % 3 == 0) arrT.push(inp.value);
        arr.push(inp.value);

        div.innerHTML = arr;
        inp.value = "";

        p.innerHTML = arrT;
      } catch (error) {
        inp.value = error.message;
      }
    });
    btn.addEventListener('dblclick', ()=>{
      inp.value = ''
    })
  }
}

const html = new HTML();

html.changeaArr();
