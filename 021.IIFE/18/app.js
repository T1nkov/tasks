// <<<<<<< HEAD
const arr = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

const sum1 = arr.reduce((sum, el) => {
  return sum + el;
}, 0);

console.log(sum1);

// ты HR эксперт, 
// какие вопросы ты бы задавал нач специалисту на озн собесе 
// =======
// Напишите функцию, которая принимает адрес электронной почты и возвращает
// объект с полями email и active. Поле active должно быть true, если адрес содержит
// символ '@' и '.com’ / ‘.by', и false в противном случае.
// {
// email,
// active: true / false
// }

const obj = {
  email: "mrfredyonmail.com",
  active: "",
  checkValidEmail: function () {
    if (this.email.includes("@" && (".com" || ".by"))) {
      this.active === true;
    } else {
      this.active = false;
    }
  },
};

// email.split("");
// function checkValidEmail(email) {
//   if (email.includes("@" && (".com" || ".by"))) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkValidEmail(email));

checkValidEmail();

console.log(obj);
// >>>>>>> 29de9a6d4f0700d07437f4fbe628efe3ecffd716
