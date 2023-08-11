// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

let data = "xxxx-xx-xx";

console.log(data.split("-").reverse().join("."));
