// Создайте объект, представляющий информацию о товарах в интернет-магазине
// (например, { product1: 10, product2: 5, product3: 8 }). Используйте Object.keys() для
// подсчета общего количества различных товаров.

const obj = {
  product1: 10,
  product2: 5,
  product3: 8,
};

function isValid(arr) {
  arr.forEach((el) => {
    if (isNaN(el)) throw new Error("Одно из значений не число");
    else true;
  });
}

function sumProd(obj) {
  try {
    const arr = Object.values(obj);
    isValid(arr);
    const sum = arr.reduce((sum, el) => {
      return sum + Number(el);
    }, 0);
    return sum;
  } catch (error) {
    return error.message;
  }
}

const res = sumProd(obj);
console.log(res);
