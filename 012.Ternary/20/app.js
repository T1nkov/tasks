// .Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

let str = prompt().toLowerCase();

if (!isNaN(str)) {
  if (str % 2 === 0) {
    console.log("четное");
  } else {
    console.log("нечетное");
  }

  console.log(str % 2 === 0 ? `четное` : `нечетное`);
} else {
  if (str === "hschool") {
    console.log(true);
  } else {
    console.log(false);
  }
}
