// На входе массив. Реализуйте две функции. Первая проверяет, что все элементы
// массива положительные числа. Вторая функция возвращает массив, в котором
// каждое положительное число умножено на 2. Если результат проверки - true,
// вызывайте вторую функцию и возвращайте полученный массив.


const arr = [1,2,3,4,5,6,7,8,9,10,11,12]


function positiveNum (arr){
  const res = arr.every((el)=>{
    if(el >= 0){
      return true
    }
  })
  return res
}


function upNum (arr){
  const pos = positiveNum(arr)

  if(pos === true){
    const res = arr.map((el)=>{
      return el*2
    })
    return res
  }
  
}

const res = upNum(arr)

console.log(res);