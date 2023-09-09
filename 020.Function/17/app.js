// Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const str = "hschool";

function changeStr(str) {
  const bool = isValidSTR(str);
  if (bool === true) {
    const newArr = [];
    str.split("").forEach((el, index) => {
      index % 2 === 0
        ? newArr.push(el.toUpperCase())
        : newArr.push(el.toLowerCase());
    });
    return newArr.join("");
  } else {
    return "error";
  }
}

function isValidSTR(str) {
  return isNaN(str) ? true : false;
}

const res = changeStr(str);
console.log(res);
