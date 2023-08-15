// . Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

let str = "стол".split("");
let str1 = "слот".split("");

if (str.sort().join("") === str1.sort().join("")) {
  console.log(true);
} else {
  console.log(false);
}

console.log(str.sort().join("") === str1.sort().join("") ? true : false);
