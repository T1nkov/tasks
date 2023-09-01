// На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
  id: 43,
  name: "hanna",
  age: 12,
};


for (const key in obj){
    if(!isNaN (obj[key])){
        console.log(key);
    }
}