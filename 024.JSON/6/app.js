// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

const a = 1;
const b = 1;
const c = 2;

function isValidNumber(a, b, c) {
  if (isNaN(a || b || c)) {
    throw new Error("не число");
  }
}

function doTriangle(a, b, c) {
  try {
    isValidNumber(a, b, c);
    if (a + b > c || a + c > b || b + c > a) {
      return true;
      
    } else {
      return false;
    }
  } catch (error) {
    return error.message;
  }
}

const res = doTriangle(a, b, c);

console.log(res);
