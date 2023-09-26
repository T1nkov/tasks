// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать


const email = 'mrf@r234__edyon@gmail.com'



function isValidEmail (email){
  try {
    if(!/^[a-zA-Z0-9\_\-\.]+@[a-z]+\.[a-z]+/g.test(email)) throw new Error ('ошибка ввода почты')
    return true
  } catch (error) {
    return error.message
  }
}

const res = isValidEmail(email)
console.log(res);