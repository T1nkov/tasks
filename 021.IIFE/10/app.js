// Напишите функцию, которая принимает два параметра: предложение из
// нескольких слов и букву. Функция должна подсчитывать количество вхождений
// указанной буквы в строке. Добавить проверки

const letter = "a";

const str = 'ananananananans';

function isValidStr(str) {
  if (typeof str === "string") {
    return true;
  }
}

function counterLetter(str, letter) {
  const res = isValidStr(str);
  if (res === true) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }

    return count;
  }else{
      return false
  }
}

const res = counterLetter(str, letter);

console.log(res);
