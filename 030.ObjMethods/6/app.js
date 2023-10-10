// Создайте функцию, которая принимает объект и имя свойства. Используйте
// hasOwnProperty, чтобы проверить, существует ли данное свойство в объекте, и
// вернуть соответствующее сообщение

const obj = {
  age: 19,
  name: "Dima",
  city: "Minsk",
};

function haveInObj(obj) {
  try {
    const inputKey = "asdas";
    // const arrKey = Object.keys(obj);
    const res = obj?.[inputKey];

    return res ? true : false;
  } catch (error) {
    return error.message;
  }
}

const res = haveInObj(obj);
console.log(res);
