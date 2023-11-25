// Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади

class Figure {
  pi = 3.14;
  r;
  a;
  h;
  setR(r) {
    this.r = r;
  }
  setA(a) {
    this.a = a;
  }
  setH(h) {
    this.h = h;
  }
}

class Circle extends Figure {
  name = "circle";
  square;
  setSquare() {
    this.square = this.pi * this.r ** 2;
  }
  getSquare() {
    return `${this.name} ${this.square}`;
  }
}

class Triangle extends Figure {
  name = "Triangle";
  square;
  setSquare() {
    this.square = 0.5 * this.a * this.h;
  }
  getSquare() {
    return `${this.name} ${this.square}`;
  }
}

class Square extends Figure {
  name = "Square";
  square;
  setSquare() {
    this.square = this.h * this.h;
  }
  getSquare() {
    return `${this.name} ${this.square}`;
  }
}

const circle = new Circle();

circle.setR(5);

circle.setSquare();
console.log(circle.getSquare());

const triangle = new Triangle();
triangle.setA(5);
triangle.setH(10);

triangle.setSquare();

console.log(triangle.getSquare());

const square = new Square();
square.setH(10);
square.setSquare();
console.log(square.getSquare());
