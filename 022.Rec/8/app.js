// Вычислите сумму массива чисел статичного массива используя рекурсию


const arr = [1,21]

function sumArr (arr){
  if(arr.length == 0) return 0
  return arr[0] + sumArr(arr.slice(1))
}

const res = sumArr(arr)
console.log(res);