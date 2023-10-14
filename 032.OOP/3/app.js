// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
  str;
  constructor(str) {
    this.str = str;
  }
  revereString = () => {
    return this.str.split("").reverse().join("");
  };
  upperFirst = () => {
    const res = this.str[0].toUpperCase() + this.str.slice(1);
    return res;
  };
  upperEvery = () => {
    let newStr = [];
    // let str1 = this.str.split(" ");
    // for (let i = 0; i < str1.length; i++) {
    //   newStr[i] = str1[i][0].toUpperCase() + str1[i].slice(1);
    // }
    // return newStr.join(" ");
    return this.str
      .split(" ")
      .map((el) => {
        if (!el.lenght) return el;
        return el[0].toUpperCase() + el.slice(1);
      })
      .join("");
  };
}

const wordstring = new WordString("lorem ipsum dollar");
console.log(
  wordstring.revereString(),
  "----------------",
  wordstring.upperFirst(),
  "----------------",
  wordstring.upperEvery()
);
