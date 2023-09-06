const database = [
  {
    id: "javascript",
    label: "JavaScript",
    category: "programmingLanguages",
    priority: 1,
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "programmingLanguages",
    priority: 1,
  },
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: "java", label: "Java", category: "programmingLanguages", priority: 3 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
];

const id = "javascript";
let res = database.filter(function (el) {
  if (el.id != id) {
    return true;
  }
});

// console.log(res);

const nObj = {
  id: prompt(""),
  label: prompt(''),
  category: prompt(""),

}


const update = database.filter(function(el){
  if(nObj.id === el.id){
    el.id = nObj.id
    el.label = nObj.label
    el.category = nObj.category  
  } 
}) 

console.log(database);

// 1. продумать как бы вы сделали обновление. (ОБНОВЛЯТЬ ТОКЛЬКО В ТОМ СЛУЧАЕ ЕСЛИ ПОЛЬЗОВАТЕЛЬ СОЗДАН, ТЕ ЕСЛИ В БД ЕСТЬ ТАКОЙ ID 
// ТО ОБНОВИТЬ И ПЕРЕЗАПИСАТЬ СТАРЫЕ ДАННЫЕ НА НОВЫЕ)


