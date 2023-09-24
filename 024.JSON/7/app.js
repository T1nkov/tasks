// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

const num = "090";

function isValidNumber(num) {
  if (isNaN(num)) {
    throw new Error("not a number");
  }
}

function inSqrt(num) {
  try {
    isValidNumber(num);
    const arr = num.split("");
    const res = arr.map((el) => {
      return el ** 2;
    });
    return res.join("");
  } catch (error) {
    return error.message;
  }
}

const res = inSqrt(num);

console.log(res);
