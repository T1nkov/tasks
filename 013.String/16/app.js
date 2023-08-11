// На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

let str = prompt().split(" ");

if (
  str[0][0] === str[0][0].toUpperCase() ||
  str[1][0] === str[1][0].toUpperCase()
) {
  console.log(true);
} else {
  console.log(false);
}
