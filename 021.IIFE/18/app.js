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
