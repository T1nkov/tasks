/* 5. Реализуйте класс Server, получающий объект из предыдущего задания и
сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между
методами следующая:
middleware -> controller -> service -> repository, где:
middleware – функция валидатор
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в
приложении
 */

class Client {
  doRegistration() {
      const login = document.querySelector('#login');
      const pwd = document.querySelector('#pwd');
      const btn = document.querySelector('button');

      btn.addEventListener('click', () => {
          let clientData = {
              email: login.value,
              pwd: pwd.value
          }
          const server = new Server();
          server.controller(clientData);
          console.log(server.controller(clientData));
      })
  }
}

class Server {
  controller(clientData) {

      try {
          let ser = this.service(clientData);
          return ser;
      } catch (error) {
          return error.message
      }

  }

  service(clientData) {
      let rep = this.repository(clientData);
      return rep
  }

  repository(clientData) {
      const data = [
          { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
          { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
          { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
          { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
          { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
      ];

      const check = data.filter(el => el.email == clientData.email);
      if (check.length) throw new Error('not unique');
      data.push({ id: data.length + 1, ...clientData })
      return data
  }

}

const client = new Client();
client.doRegistration();