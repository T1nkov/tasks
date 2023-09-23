// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const num = 5;

function getArr(num) {
  const newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(+prompt("input nums"));
  }
  return newArr;
}

function isValidArr(arr) {
  if (!Array.isArray(arr)) throw new Error("no arr");
  const check = arr.every((el) => {
    if (isNaN(el)) return false
    else return true;
  });
  if (!check) {
      throw new Error ('you input not a number')
  }
}

function findRange(arr) {
  try {
    isValidArr(arr);
    const res = arr.filter((el) => (el > 10 && el < 100));
    return res
  } catch (error) {
    return error.message;
  }
}

const arr = getArr(num);

const res = findRange(arr);
console.log(res);

