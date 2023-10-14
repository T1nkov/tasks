// Создайте функцию, которая принимает два объекта. Используйте hasOwnProperty,
// чтобы объединить только те свойства, которые существуют в обоих объектах.

const dataVk = {
  id: 123,
  name: "Dima",
  pass: "abcd",
};
const datatg = {
  id: 231,
  name: "Dima",
  pass: "as",
  adasd: 'asdf'
};

const dataNew = {};

function inOneObj(datatg, dataVk, dataNew) {
  try {
    const arrVk = Object.keys(dataVk);
    const arrVal = Object.values(dataVk);
    for (let i = 0; i < arrVk.length; i++) {
      if (arrVk[i] in datatg) {
        dataNew[arrVk[i]] = arrVal[i];
      }
    }
    return dataNew;
  } catch (error) {
    return error.message;
  }
}

const res = inOneObj(datatg, dataVk, dataNew);
console.log(res);
