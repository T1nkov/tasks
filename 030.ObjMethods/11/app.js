// . У вас есть массив с данными. Извлеките первый и второй элементы массива с
// использованием деструктуризации

const arr = ["Dima", "19", "Alex", "Hanna"];

function retUser(arr) {
  const [name, age] = arr;
  return name + age;
}

const res = retUser(arr);

console.log(res);
