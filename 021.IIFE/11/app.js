// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
  id: 1,
  name: "dafa",
  age: 23,
  number: 1232,
};

(function (obj) {
    const numsObj = {

    }
    for (let el in obj){
        if(typeof obj[el] === 'number'){
            numsObj[el] = obj[el]
        }
    }

    console.log(numsObj)
})(obj);
