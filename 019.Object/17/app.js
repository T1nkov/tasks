// . Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = ["anna", "masha", "anna", "alla", "anna"];
const obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = [];
}

for (let i = 0; i < obj.length; i++) {
  if (obj[arr[i]] == arr[i]) {
    obj[arr[i]].push(arr[i]);
  }
  console.log(obj[arr[i]]);
}
console.log(obj);

for(key in obj){
    if(obj[key] === )
}