// ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"

let str = "HTML JavaScript PHP";

console.log(str.split(" ").join("-").toUpperCase());

console.log(str.replaceAll(" ", "-").toUpperCase());
