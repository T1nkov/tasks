// 3. Преобразуйте объект с данными о фруктах (например, { яблоко: 'красное', банан:
// 'желтый', апельсин: 'оранжевый' }) в массив пар ключ-значение, используя
// Object.entries().

const obj = {
  apple: "red",
  banana: "yellow",
  orange: "orange",
};

function arrKeyVal(obj) {
  try {
    const arr = Object.entries(obj);
    return arr;
  } catch (error) {
    return error.message;
  }
}

const res = arrKeyVal(obj);

console.log(res);
