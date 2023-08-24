// Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.

let arr = [2, 3, 4, 5];

let pro = 1;

for (let i = 0; i < arr.length; i++) {
  pro *= arr[i];
}

console.log(pro);

let pro1 = 1;

for (num of arr) {
  pro1 *= num;
}

console.log(pro1);

let pro2 = 1;

let i = 0;
do {
  pro2 *= arr[i];
  i++;
} while (i < arr.length);

console.log(pro2);
