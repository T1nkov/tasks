// На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

let str = "Swap Case";

let res = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    res += str[i].toLowerCase();
  } else res += str[i].toUpperCase();
}

console.log(res);