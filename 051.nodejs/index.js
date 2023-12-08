const express = require("express");
const bodyParser = require("body-parser");
const { show, showId, createUser, deleteUser, update } = require("./service");
const app = express();

app.use(bodyParser.json());

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const ban = showId(id);
  res.send(ban);
});

app.post("/hi", (req, res) => {
  const { name, age } = req.body;
  const user = createUser(name, age);
  res.send(user);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const res = update(id, name, age);
  res.send(res)
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const del = deleteUser(id);
  res.send(del);
});

app.listen(3000, () => console.log("server run"));
// Установить пакет npm
// 2. Поставить сервер
// 3. Добавить 2 обработчика маршрута: get, post
// 4. На сервере есть файл сервисов. В нем глобально хранится массив. Прописать
// логику так, чтобы при get запросе отправлялся ответ клиенту с массивом внутри
// тела
// 5. На сервере есть файл сервисов. В нем глобально хранится массив объектов.
// Прописать логику так, чтобы при get запросе отправлялся ответ клиенту с
// массивом внутри тела и статус ответа
// 6. Добавить 1 обработчик маршрута: get с url “/:id”. На сервере есть файл сервисов. В
// нем глобально хранится массив объектов. Прописать логику так, чтобы при get
// запросе отправлялся ответ клиенту с объектом, id которого совпадает с
// запрашиваемым id, статус ответа
// 7. Для post запроса добавить добавление тела запроса в массив и возвращать
// обновленный массив, статус ответа
// 8. Добавить 2 обработчика маршрута: put, delete
// 9. Для put с url “/:id” запроса добавить обновление массива по id и возвращать
// обновленный массив, статус ответа
// 10. Для delete с url “/:id” удалять по id элемент массива
