// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5

let str = "АааГГЦЦцТТтттА".toLowerCase();

let a = 0;
let g = 0;
let c = 0;
let t = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] == "а") {
    a += 1;
  } else if (str[i] == "г") {
    g += 1;
  } else if (str[i] == "ц") {
    c += 1;
  } else if (str[i] == "т") {
    t += 1;
  }
}

console.log("А - " + a, "Г - " + g, "Ц - " + c, "Т - " + t);
