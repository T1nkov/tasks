// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str используя Object.values

const obj = {
  age: 19,
  name: "Dima",
  city: "Minsk",
};

const str = "Dima";

function isValid(obj, str) {
  try {
    const arr = Object.values(obj);

    const res = arr.some((el) => el == str);
    return res;
  } catch (error) {
    return error.message;
  }
}

const res = isValid(obj, str);
console.log(res);
