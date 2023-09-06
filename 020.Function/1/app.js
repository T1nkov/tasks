// Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»


function outputHello (firstName, lastName){
  console.log(`Привет, ${firstName} ${lastName}`);
}

outputHello(prompt('Name'), prompt('lastname'))