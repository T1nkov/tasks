// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

// let arr = []
// for(;;){
//   if(arr.length === 5){
//     break
//   }else{
//     arr.push(prompt())
//   }
// }

// console.log(arr);
let arr2 = [];
while (true) {
  if (arr2.length === 5) {
    break;
  } else {
    arr2.push(prompt());
  }
}

console.log(arr2);
