// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

let a = 'afaa'

if (typeof a === 'string'){
    console.log(a.toUpperCase());
}
else{
    console.log('введи строку')
}