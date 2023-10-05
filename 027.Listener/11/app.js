// 0. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const btn = document.querySelector("button");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

btn.addEventListener("click", function () {
  try {
    if (!input1.value || !input2.value) throw new Error("empty input");
    const intermed = input1.value;
    input1.value = input2.value;
    input2.value = intermed;
  } catch (error) {
    alert(error.message);
  }
});
