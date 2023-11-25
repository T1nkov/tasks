// Вы вводите числа в поле для ввода формируя массив. Необходимо отобразить
// массив, а также отдельно все четные элементы этого массива и нечетные. Вы
// вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// Реализовать Html: input, button, div (для отображения результатов)
// [1, 1, 4, 2, 3, 3] -> [4, 2]

class Html {
  countEven() {
          const inp = document.querySelector('input');
          const btn = document.querySelector('button');
          const p = document.querySelector('p');
          const div = document.querySelector('div')
          const arr = [];
         
          btn.addEventListener('click', () => {
                  arr.push(inp.value)
                  const arr_unique = [];
                  div.innerHTML = arr
                  let arr_sort = arr.sort((a, b) => a - b)
                  for (let i = 0; i < arr_sort.length; i++) {
                          if (arr_sort[i] != arr_sort[i + 1] && arr_sort[i] != arr_sort[i - 1]) arr_unique.push(arr_sort[i]);
                  }
                  p.textContent = arr_unique
                  inp.value = ''
          })

  }

}


const html = new Html();
html.countEven()