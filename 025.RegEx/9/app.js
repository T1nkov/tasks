// Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const pin = '12244'

function isValidPin (pin) {
  try {
    
    if(pin.length === 4 || pin.length === 6){
      if(/^[0-9]+$/gm.test(pin))  return true
      else  throw new Error ('не подходит по RegEX')
    }else throw new Error ('не подходит по длинне')
    
  } catch (error) {
    return error.message
  }
}

const res = isValidPin(pin)
console.log(res);