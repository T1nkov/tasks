// Преобразовать строку ‘ Full StaCK DevELoper ’ в массив вида [‘full, ‘stack’,
//   ‘developer’]
  

let a = prompt();

if (isNaN(a)) {
  console.log(a.split(""));
} else {
  //   if (a % 2 === 0) {
  //     console.log("четное");
  //   } else {
  //     console.log(нечетное);
  //   }

//   a % 2 === 0 ? console.log("chetnyy") : console.log("nechetnyy");
    console.log( a % 2 === 0 ?'chetny':'nechetny')
}
