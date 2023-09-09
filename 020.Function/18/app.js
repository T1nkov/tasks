// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”

const date = "xx/xx/xxxx";

function isValidSLSH(date) {
  return date.includes("/") ? true : false;
}

function changeDate(date) {
  const bool = isValidSLSH(date);
  if (bool === true) {
    return date.replaceAll("/", "-").split("").reverse().join("");
  } else {
    return "error";
  }
}

const res = changeDate(date);
console.log(res);
