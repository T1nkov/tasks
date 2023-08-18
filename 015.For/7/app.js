// Преобразуйте первую букву строки в верхний регистр несколькими способами

let str = "milk";

console.log(str[0].toUpperCase() + str.slice(1));

console.log();

let str2 = "mILK";

let local = "";
for (let i = 0; i < str2.length; i++) {
  if (str2[i] === str2[i].toLowerCase()) {
    local += str2[i].toUpperCase();
  } else {
    local += str2[i].toLowerCase();
  }
}

console.log(local);
