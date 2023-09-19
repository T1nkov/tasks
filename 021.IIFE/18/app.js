const arr = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

const sum1 = arr.reduce((sum, el) => {
  return sum + el;
}, 0);

console.log(sum1);

// ты HR эксперт, 
// какие вопросы ты бы задавал нач специалисту на озн собесе 
