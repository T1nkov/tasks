// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого)
// преобразовать в верхний регистр
// anna_test_test -> annaTestTest

let str = "anna_test_test".split("_");
let res = str[0];
for (let i = 1; i < str.length; i++) {
  res += str[i][0].toUpperCase() + str[i].slice(1);
}

console.log(res);
