// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого)
// преобразовать в верхний регистр
// anna_test_test -> annaTestTest

let str = "anna_test_test".split("_");



for (let i = 1; i < 3; i++) {
   
    console.log(str[i].toUpperCase(i));
    console.log(str);
    
}
