// На входе массив чисел. Реализуйте функцию, которая находит наибольшую
// последовательность непрерывных чисел в массиве и возвращает ее. Например,
// для массива [1, 2, 3, 4, 5, 6, 2, 3, 4] функция должна вернуть [1, 2, 3, 4, 5, 6].


arr = [1, 2, 3, 4, 5, 6, 2, 3, 4]

function bubblrSort (arr){
  for (let j = arr.length - 1 ; j > 0; j--){
     for( let i = 0; i< j; i++){
       if(arr[i]> arr[i+1]){
         let temp = arr[i]
         arr[i] = arr[i+1]
         arr[i+1] = temp
       }
     }
  }
  console.log(arr);
}

bubblrSort(arr)

function sortNum (arr){
  if ()
}