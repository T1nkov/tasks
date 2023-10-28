// Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки

class ServerById {
  controller(json) {
    const res = this.service(json);
    return res;
  }
  service(json) {
    const res = this.repository(json);
    return res;
  }
  repository(json) {
    const data = [
      { id: 1, name: "Yesenia", age: 22 },
      { id: 2, name: "Hanna", age: 22 },
      { id: 3, name: "Stanislau", age: 25 },
      { id: 4, name: "German", age: 18 },
      { id: "javascript", name: "Maria", age: 297 },
    ];
    return data.some((el) => {
      if (el.id == json.id) return true;
    });
  }
}
const json = JSON.parse(`{"id": "javascript"}`);
const serverById = new ServerById();

console.log(serverById.controller(json));
