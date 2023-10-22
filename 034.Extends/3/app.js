// Реализуйте класс Singer, который будет наследоваться от класса Worker. Класс
// Worker состоит из: свойства name, свойства surname, метода getFullName(), с
// помощью которого можно вывести одновременно имя и фамилию; Класс Singer
// состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
// информацию о певце: name, surname, years, birth, style. Необходимо вызвать
// методы getFullName , getMoreInfo через класс Singer

class Worker {
  name;
  surname;
  setName(name) {
    this.name = name;
  }
  setSurname(surname) {
    this.surname = surname;
  }
  // getName() {
  //   return this.name;
  // }
  // getSurname() {
  //   return this.surname;
  // }
}

class Singer extends Worker {
  years;
  birth;
  style;
  setYears(years) {
    this.years = years;
  }
  setBirth(birth) {
    this.birth = birth;
  }
  setStyle(style) {
    this.style = style;
  }
  getMoreInfo() {
    return `${this.years}, ${this.birth}, ${this.style}`;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const singer = new Singer();

singer.setName("Pavel");
singer.setSurname("Tinkov");
singer.setYears("12");
singer.setBirth("12.10.2011");
singer.setStyle("naf");

console.log(singer.getFullName());
console.log(singer.getMoreInfo());
