// На вход подается строка из 2 и более слов. Необходимо все симводы заменить на
// пустую строку. 


const str = 'double three'

function doClean(str){
  try { 
   if(!/^[a-z0-9]+\ [a-z0-9]+$/gm.test(str)) throw new Error ('ошибка ')
    return  str.replaceAll('/\s+/gm','')
  } catch (error) {
    return error.message
  }
}

const res = doClean(str)
console.log(res);