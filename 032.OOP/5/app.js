// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//   замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//   если слова являются анаграммами. Добавить проверки на ввод

class Anagram {
  fWord;
  sWord;
  constructor(a, b) {
    this.fWord = a;
    this.sWord = b;
  }
  getAnagram = () => {
    const word1 = this.fWord.toLowerCase().split("").sort().join("");
    const word2 = this.sWord.toLowerCase().split("").sort().join("");
    if (word1 === word2) return true;
    else return false;
  };
}

const anagram = new Anagram("anna", "nnaa");
const res = anagram.getAnagram();
console.log(res);
