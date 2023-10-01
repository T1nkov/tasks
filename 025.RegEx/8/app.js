// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать
const str = "afsddsdfe";


function doLetter(str) {
  try {
    const res = str.match(/[a-z]/gi).join('')
    if(res.length != str.length) throw new Error ('разная длинна')
    return true
  } catch (error) {
      return error.message
  }
}

const res = doLetter(str)
console.log(res);