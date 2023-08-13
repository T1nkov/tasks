// На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

let str1 = "nastya dima";
let str2 = "dima";

if (str1.includes(str2)) {
  console.log(true);
} else {
  console.log(false);
}
