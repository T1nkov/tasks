// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

const n = 5;
const arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {
  let num = prompt("");
  if (!isNaN(num)) {
    arr.push(+num);
  }
}

for(let i = 0; i<arr.length;i++){
  if(arr[i] === 0){
    break
  }else{
    sum +=arr[i]
  }

}

console.log(sum);

// sdkvs