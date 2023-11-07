class ServerPut {
    middleware(json) {
      
    }
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
        { id: 5, name: "Maria", age: 27 },
      ];
      const res = data.map((el) => {
        if (el.id == json.id) return json;
        else return el;
      });
      return res;
    }
  }
  