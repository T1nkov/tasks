// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// ax2 + bx + c = 0

const a = 1;
const b = 4;
const c = -3;

const d = b ** 2 - 4 * a * c;

if (d < 0) {
  console.log("нет корней");
} else if (d === 0) {
  x = (-b / 2) * a;
  console.log(x);
} else if (d > 0) {
  x1 = ((-b + Math.sqrt(d)) / 2) * a;
  x2 = ((-b - Math.sqrt(d)) / 2) * a;
  if (x1 > x2) {
    console.log(x2, x1);
  } else if (x1 < x2) {
    console.log(x1, x2);
  }
}
