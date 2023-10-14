// . Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const pil = +document.querySelector("#pil");
const wdthPil = +document.querySelector("#wdthPil");
const btwPil = +document.querySelector("#btwPil");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  try {
    if (pil.value < 1) throw new Error("неверное колво столбов");
    if (wdthPil.value > 10 && wdthPil.value < 50)
      throw new Error("неверная ширина столба");
    alert(pil.value)
  } catch (error) {
    alert(error.message);
  }
});
