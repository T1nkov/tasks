// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//   значение) где значение число и вывести количество 

const obj = {
  id: 3,
  age: 65,
  name: "Dmitry",
  lastName: "Tinkov",
};

let count = 0;

for(const key in obj){
  if(!isNaN(obj[key])){
    count ++
  }
}

console.log(count);