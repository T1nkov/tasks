// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const arr = ["a", "b", "c", "d", "f"].join("");
const abc = "abcdefghijklmnopqrstuvwxyz";

const index = abc.indexOf(input[0]);

const sliceAbc = abx.slice(index);

for (let i = 0; i < sliceAbc.length; i++) {
  if (sliceAbc[i] != input[i]) {
    console.log("пропала буква ", sliceAbc[i]);
    break
  }
}

function isValidLetter(arr) {
  if (arr.every((el) => !isNaN(el))) {
    throw new Error("не массив");
  }
  return true;
}

function findLetter(arr) {
  try {
  } catch (error) {
    return error.message;
  }
}
