// . На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const obj = {};

for (let i = 0; i < arr.length; i++) {
  if(arr[i] % 2 === 0){
    obj[i] = true
  }else{
    obj[i] = false
  }
  

}

console.log(obj);