// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте методы получатели и модификаторы экземпляра класса
// Customer

class Person {
  name;
  mail;
  telNumber;
  setName(name) {
    this.name = name;
  }

  setMail(mail) {
    this.mail = mail;
  }
  setTelNumber(telNumber) {
    this.telNumber = telNumber;
  }
  getName() {
    return this.name;
  }

  getMail() {
    return this.mail;
  }
  getTelNumber() {
    return this.telNumber;
  }
}

class Customer extends Person {
  boolean;

  setBoolean(boolean) {
    this.boolean = boolean;
  }
  getBoolean() {
    return this.boolean;
  }
  getTelNumber() {
    return this.telNumber;
  }
}

const customer = new Customer();

customer.setName("Dmitry");
customer.setMail("Minsk");
customer.setTelNumber("375292823711");
customer.setBoolean(true);

console.log(
  // customer.getName(),
  // customer.getMail(),
  customer.getTelNumber(),
  
  customer.getBoolean()
);
