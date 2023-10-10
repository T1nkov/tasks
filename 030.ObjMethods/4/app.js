// Создайте функцию, которая принимает объект и строку (имя свойства) и
// возвращает true, если такое свойство существует в объекте, и false, если нет,
// используя Object.keys().

const obj = {
  age: 19,
  name: "Dima",
  city: "Minsk",
};

function checkObj(obj) {
  try {
    const arrKey = Object.keys(obj);

    for (let i = 0; i < arrKey.length; i++) {
      const key = prompt("input key");

      return arrKey.some((el) => el === key);
    }
  } catch (error) {
    return error.message;
  }
}

const res = checkObj(obj)

console.log(res);