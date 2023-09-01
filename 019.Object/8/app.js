// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//   значение)

const obj = {
  id: 3,
  age: 65,
  name: "Dmitry",
  lastName: "Tinkov",
};

let count = 0;

for (const key in obj){
  if(key){
    count++
  }
}

console.log(count);