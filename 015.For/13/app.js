// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение
// элементов этого массива

let arr = [2,3,4,5]

let res = 1;

for (let i =0; i<arr.length; i++){
    res *= arr[i]
}
console.log(res);