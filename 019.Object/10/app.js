// На входе статичный объект, включающий такие ключи как name, age, birthday,
// значения ключей – пустые строки. Считать данные с клавиатуры и заполнить
// объект соответствующими данными. Добавить проверки на ввод

const obj = {
  name: "",
  age: "",
  birthday: "",
};

for (const key in obj) {
  const input = prompt(`input ${key}`);

  if(isNaN(input)){
    if(obj[key] == obj.name){
      obj[key] = input
    }
  }else{
    obj[key] = input 
  }
}

console.log(obj);