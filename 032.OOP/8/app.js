// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

// class Validator {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   isEmail() {
//     try {
//       if (!/^[a-zA-Z0-9\_\-\.]+@[a-z]+\.[a-z]+/g.test(this.email))
//         throw new Error("ошибка ввода почты");
//       else return true;
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

// const validator = new Validator("mrfredyon@gmail.com");
// const res = validator.isEmail()
// console.log(res);

class Validator {
  email;
  constructor(email) {
    this.email = email;
  }
  isEmail() {
    try {
      if (!/^[a-zA-Z0-9\_\-\.]+@[a-z]+\.[a-z]+/g.test(this.email))
        throw new Error("ошибка ввода почты");
      else return true;
    } catch (error) {
      console.log(error.message);
    }
  }
}

const validator = new Validator("mrfredyon@gmail.com");
const res = validator.isEmail()
console.log(res);
