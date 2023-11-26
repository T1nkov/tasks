// У вас есть 3 инпута. Необходимо вывести в div результат конкатенацию всех
// инпутов по клику на кнопку

class HTML {
  doConcat() {
    const inp1 = document.querySelector(".f");
    const inp2 = document.querySelector(".s");
    const inp3 = document.querySelector(".t");
    const btn = document.querySelector("button");
    const p = document.querySelector("p");

    btn.addEventListener("click", () => {
      p.innerHTML = inp1.value + inp2.value + inp3.value;
    });
  }
}


const html = new HTML()

html.doConcat()