// На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.

const obj = {
  3: 2,
  age: 11,
  1: 3,
  long: 1,
};

const arr = [];

for (const key in obj) {
  if (isNaN(key)) {
    continue;
  } else {
    if (key % 2 != 0) {
      arr.push(key);
    }
  }
}

console.log(arr);
