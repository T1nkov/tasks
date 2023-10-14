// Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.

// class Singer {
//   name = "Dima";
//   surname = "Tinkov";
//   getAutograph = () => {
//     return `${this.name} ${this.surname}`;
//   };
// }

// const singer = new Singer();

// console.log(singer.getAutograph());

// class Singer {
//   name;
//   surname;
//   getAutograph = () => {
//     return `${this.name} ${this.surname}`;
//   };
// }

// const singer = new Singer();

// singer.name = 'Pavel'
// singer.surname = 'DADADAD'
// console.log(singer.getAutograph());

class Singer {
  name;
  surname;
  constructor(a, b) {
    this.name = a;
    this.surname = b;
  }
  getAutograph = () => {
    return `${this.name} ${this.surname}`;
  };
}

const singer = new Singer("Dima", "Pavlovish");

console.log(singer.getAutograph());
