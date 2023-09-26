// . На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать


const about = 'DmitDry Tinkov 19'


function isValidAbout (about){
  try {
    if(!/^[A-Z][a-z]+ [A-Z][a-z]+ [1-9]{1,2}$/g.test(about)) throw new Error ('неправильный тип')
    return true
  } catch (error) {
    return error.message
  }
}

const res = isValidAbout(about)
console.log(res);