// На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

let str = "123@1@@34";
let result = "";

for (i = 0; i < str.length; i++) {
  if (str[i] == "@") {
    console.log("@");
  } else {
    result += str[i];
  }
}
console.log(result);

// result += str[i]
//         console.log(result);
