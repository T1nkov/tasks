// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"


const arr = ['a','b','c','d','f']


function isValidLetter (arr){
  if(arr.every(el => !isNaN(el))){
   throw new Error ('не массив')
  }
  return true
}

function findLetter(arr) {
  try {
    
  } catch (error) {
    return error.message
  }
}