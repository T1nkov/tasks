// 1. На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение


const num = prompt('введи значение'); 



function isValidEven (num){
  try {
    if(isNaN(num)) throw new Error('Это строка')
    if(num % 2 !== 0) throw new Error ('Это нечетное число')
  } catch (error){
    return error.message
  }
}

const res = isValidEven(num)
console.log(res);