// Создайте функцию, которая принимает объект и возвращает массив всех его
// значений, используя Object.values().

const obj = {
  age: 19,
  name: "Dima",
  city: "Minsk",
};

function returnVal(obj) {
  try {
    const arr = Object.values(obj);
    if (arr.length === 0) throw new Error("empty");
    return arr;
  } catch (error) {
    return error.message;
  }
}

const res = returnVal(obj);

console.log(res);
