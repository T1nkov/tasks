// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)

let a = prompt();

// if (a > 0) {
//   if (a <= 2 || a === 12) {
//     alert("winter");
//   }else if(a>=3 && a<=5){
//       alert('spring')
//   }else if(a>=6 && a<=8 ){
//       alert('summer')
//   }else if (a>=9 && a<=11) {
//       alert('autum')
//   }
// } else {
//   alert("error");
// }

switch (a) {
  case "12":
    alert("winter");
    break;
  case "1":
    alert("winter");
    break;
  case "2":
    alert("winter");
    break;
  case "3":
    alert("spring");
    break;
  case "4":
    alert("spring");
    break;
  case "5":
    alert("spring");
    break;
  case "6":
    alert("summer");
    break;
  case "7":
    alert("summer");
    break;
  case "8":
    alert("summer");
    break;
  case "9":
    alert("autum");
    break;
  case "10":
    alert("autum");
    break;
  case "11":
    alert("autum");
    break;
}
