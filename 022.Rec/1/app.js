// Отобразите в строке через пробел числа от 0 до 10 по возрастанию используя
// рекурсию
let i = 10

function dubleNum (i){
    if(i == 0) return `${i}.`
  return `${i}, ` + dubleNum(i-1)
}

const res = dubleNum(i)
console.log(res);