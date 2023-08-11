// На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если заканчивается,
// то вывести true, в противном случае false

let str = "banana@gmail.com";

if (isNaN(str)) {
  if (str.includes(".com") || str.includes(".ru")) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(str.includes(".com") || str.includes(".ru") ? true : false);
} else {
  console.log(false);
}
