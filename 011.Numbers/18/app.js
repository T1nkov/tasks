// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//     же результат – число с плавающей точкой, то округлить то целых)
    

const a = +prompt();


if(Number.isInteger(a)){
    console.log(Math.floor(Math.sqrt(a)));
}else{
    console.log(Math.sqrt(a));
}