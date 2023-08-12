// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

let email = "mrfredyon@gmail.com";

console.log(email.includes("@") && email.includes("com", ".ru") ? true : false);
