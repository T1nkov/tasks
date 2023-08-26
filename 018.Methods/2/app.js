// На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach
let num = 5

let a = prompt('chislo1')
let b = prompt('chislo2')

let arr = []

for (let i = 0; i<num; i++){
  arr.push(prompt('введи число'))

}


let res = arr.filter(function(elem){
  if(!isNaN(elem) && (elem != a && elem != b)){
    return true
  }else{
    return false
  }
})

if(res.length === 0){
  console.log('Array is clear');
}else{
  console.log(res);
}
