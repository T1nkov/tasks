// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]


const n = 5;

const arr = []
const newArr = []
for(let i = 0; i<n; i++){

  let str = prompt('')
  if(isNaN(str)){
    arr.push(str)
  }
}


const res = arr.map(function(elem){
  // return "#" + elem 
  return `#${elem}`
})

console.log(res);

arr.forEach(function(elem){
  newArr.push('#' + elem) 
})

console.log(newArr);