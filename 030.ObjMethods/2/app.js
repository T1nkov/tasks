// У вас есть объект, представляющий собой список студентов и их оценок
// (например, { Анна: 95, Иван: 88, Мария: 92 }). Используйте Object.keys() и Array.filter()
// для фильтрации студентов, у которых оценки выше определенного порога.
// 3

const obj = {
  Ivan: 95,
  Mariya: 88,
  Hanna: 92,
};

const min = 90;

function isValid(arr) {
  arr.forEach((el) => {
    if (isNaN(el)) throw new Error("Одно из значений не число");
    else true;
  });
}

function goodMark(obj, min) {
  try {
    const arr = Object.values(obj);
    isValid(arr);
    const mark = arr.filter((el) => {
      if (el >= min) {
        return el;
      }
    });
    if (mark.length === 0) throw new Error("нет такой оценки");
    return mark;
  } catch (error) {
    return error.message;
  }
}

const res = goodMark(obj, min);
console.log(res);
