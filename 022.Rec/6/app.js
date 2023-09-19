// На входе массив array. Посчитайте количество элементов массива используя
// рекурсию

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function quantity(arr) {
  if(arr.length === 0) return 0
  return 1 + quantity(arr.slice(1))
  
}

const res = quantity(arr);
console.log(res);