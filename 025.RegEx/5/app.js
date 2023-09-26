// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать


const url = 'https://reg@..//ex101.com'


function isValidUrl(url){
  try {
    if(!/^(http|https)\:\/\/[a-z0-9]+\.[a-z]+$/g.test(url)) throw new Error ('ошибка в url')
    return true
  } catch (error) {
    return error.message
  }
}

const res = isValidUrl(url)

console.log(res);