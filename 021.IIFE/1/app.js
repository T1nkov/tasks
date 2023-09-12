// Создайте объект calculator с полем result и методами add и subtract, которые
// принимают в качестве параметров число и изменяют result соответственно. В
// задаче использовать контекст

// const num = +prompt('')

const calculator = {
  result: 0,
  add: function (num) {
    this.result += num 
    console.log(this.result);
  },
  subtract: function (num) {
    this.result -= num
    console.log(this.result);
  },

};

calculator.add(5)