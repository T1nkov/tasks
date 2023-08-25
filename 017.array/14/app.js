// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

let arr = [10, 20, 30, 50, 235, 3000];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i]>=10){
      console.log(arr[i]);
  }else if(arr[i]>=100){
      console.log(arr[i]);
  }else if(arr[i]>=1000){
      console.log(arr[i]);
  }
}

console.log(newArr);
