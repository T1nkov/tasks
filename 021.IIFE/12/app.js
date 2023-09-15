// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE


const obj = {
  id: 1,
  name: "dafa",
  age: 23,
  number: 1232,
};

(function(obj){
  let count = 0
  for (let el in obj){
    count++
  }
  console.log(count);
}(obj))