// 3. У вас есть объект с информацией о пользователе. Извлеките имя и возраст
// пользователя с использованием деструктуризации.

const user = {
  name: "Dima",
  age: 19,
};

function retUser(user) {
  const { name, age } = user;
  return name +  age;
}

const res = retUser(user);

console.log(res);
