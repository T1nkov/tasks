// На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true

let str1 = "string";

let str2 = "STrinG";

if (str1.toLowerCase() == str2.toLowerCase()) {
  console.log(true);
} else {
  console.log(false);
}
