// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const arr = ["by", "belarus", "de", "ru", "salamalekym"];

const newArr = [];
function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 2) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

sortArr(arr);
