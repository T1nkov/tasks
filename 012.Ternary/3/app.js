// Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
// вывести день для введенного числа.
// 1 -> Понедельник

let a = +prompt();

// switch (a) {
//   case "1":
//     console.log("monday");
//     break;
//   case "2":
//     console.log("thursday");
//     break;
//   case "3":
//     console.log("wensday");
//     break;
//   case "4":
//     console.log("thirsday");
//     break;
//   case "5":
//     console.log("friday");
//     break;
//   case "6":
//     console.log("satarday");
//     break;
//   case "7":
//       console.log("sunday");
//     break;
// }

if (a === 1) {
  console.log("monday");
} else if (a === 2) {
  console.log("thursday");
} else if (a === 3) {
  console.log("wensday");
} else if (a === 4) {
  console.log("thirsday");
} else if (a === 5) {
  console.log("friday");
} else if (a === 6) {
  console.log("friday");
} else if (a === 7) {
  console.log("satarday");
} else{
    console.log('wrong');
}
