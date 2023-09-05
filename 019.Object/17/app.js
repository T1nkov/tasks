// . Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = ["anna", "masha", "anna", "alla", "anna"];
const obj = {};

for (const el of arr) {
  if (obj[el]) {
    obj[el] += 1;
  } else {
    obj[el] = 1;
  }
}

const arrNums = [];

for (const key in obj) {
  arrNums.push(obj[key]);
}

const max = Math.max(...arrNums);

for (const key in obj) {
  if (obj[key] === max) {
    console.log(`${key} повторилось ${max} раз`);
  }
}
