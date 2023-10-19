const fChar = document.querySelector("#fChar");
const sChar = document.querySelector("#sChar");
const btn = document.querySelector("button");

const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");

const mult = document.querySelector("#mult");
const divid = document.querySelector("#divid");

class DomHtml {
  mainAction() {
    btn.addEventListener("click", () => {
      this.doPlus();
      this.doMinus();
      this.doMultiplu();
      this.doDivide();
    });
  }
  doPlus() {
    sum.textContent = `${+fChar.value} + +sChar.value;`
  }
  doMinus() {
    sub.textContent = +fChar.value - +sChar.value;
  }
  doMultiplu() {
    mult.textContent = +fChar.value * +sChar.value;
  }
  doDivide() {
    divid.textContent = +fChar.value / +sChar.value;
  }
}

const domHtml = new DomHtml();

domHtml.mainAction();
