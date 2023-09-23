// Дана строка массива. Необходимо спарсить строку. Если же после того как вы
// спарсили данные у вас не массив – бросить исключение. Вывести
// те элементы массива, id котрых – четное значение

const str = `[
  { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
  { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
  { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
  { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
  { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
  ]`;

function isValidArray(pars) {
  if (!Array.isArray(pars)) throw new Error("это не массив");
  const res = pars.every((el) => !isNaN(el.id));
  if (!res) throw new Error("в id есть буквы");
  return res;
}
function parsArr(str) {
  try {
    const pars = JSON.parse(str);
    isValidArray(pars);
    return pars.filter((el) => el.id % 2 == 0);
  } catch (error) {
    return error.message;
  }
}
const res = parsArr(str);
console.log(res);
