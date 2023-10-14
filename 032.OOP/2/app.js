// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

// class Calculator {
//   a = 5;
//   b = 10;

//   getSum = () => {
//     const res = this.a + this.b;
//     return res;
//   };
//   getMinus = () => {
//     const res2 = this.a - this.b;
//     return res2;
//   };
//   getMultiply = () => {
//     const res3 = this.a * this.b;
//     return res3;
//   };
//   getDevide = () => {
//     const res4 = this.a / this.b;
//     return res4;
//   };
// }

// const calculator = new Calculator();

// console.log(
//   calculator.getSum(),
//   calculator.getMinus(),
//   calculator.getMultiply(),
//   calculator.getDevide()
// );

// class Calculator {
//   a;
//   b;
//   getSum = () => {
//     const res = this.a + this.b;
//     return res;
//   };
//   getMinus = () => {
//     const res2 = this.a - this.b;
//     return res2;
//   };
//   getMultiply = () => {
//     const res3 = this.a * this.b;
//     return res3;
//   };
//   getDevide = () => {
//     const res4 = this.a / this.b;
//     return res4;
//   };
// }

// const calculator = new Calculator();

// calculator.a = 5;
// calculator.b = 10;
// console.log(
//   calculator.getSum(),
//   calculator.getMinus(),
//   calculator.getMultiply(),
//   calculator.getDevide()
// );

class Calculator {
  getSum = (a,b) => {
    const res = a + b;
    return res;
  };
  getMinus = (a,b) => {
    const res2 = a - b;
    return res2;
  };
  getMultiply = (a,b) => {
    const res3 = a * b;
    return res3;
  };
  getDevide = (a,b) => {
    const res4 = a / b;
    return res4;
  };
}


const calculator = new Calculator();

calculator.getSum(5,10)