// . На входе статичный объект. Необходимо вывести все четные значения объекта.


const obj = {
    id: 5,
    age: 30,
    1:28,
    2:12,

}

for (const key in obj){
    if(obj[key] % 2 === 0){
        console.log(key);
    }
}