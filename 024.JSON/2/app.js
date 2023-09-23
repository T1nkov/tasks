// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

const arr = [1, 2, 3,'sdg'];

function isValidArr(arr) {
  try {
    const res = arr.every((el) => !isNaN(el));
    if (!res) {
      throw new Error("Есть строка");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}

const res = isValidArr(arr);

console.log(res);
