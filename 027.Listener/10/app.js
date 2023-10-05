// 0. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута


const unlock = document.querySelector("#unlock");
const lock = document.querySelector("#lock");

const input = document.querySelector('input')
lock.addEventListener("click", function () {
  try {
   input.disabled = true
  } catch (error) {
    
  }
});
unlock.addEventListener("click", function () {
  try {
   input.disabled = false
  } catch (error) {
    
  }
});