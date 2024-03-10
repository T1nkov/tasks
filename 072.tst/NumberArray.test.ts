// 9. . Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива

class NumberArray {
  arr: number[] = [1,2,3];

  getSum(): number {
    try {
      const res = this.arr.reduce((sum, el) => {
        return (sum += el);
      }, 0);
      return res;
    } catch (error: any) {
      return error.message;
    }
  }

  getEvenNumbers(): number[] {
    return this.arr.filter((el: number): boolean => el % 2 == 0);

  }
}



describe('test for numArray', ()=>{
    test('true', ()=>{
        const numberArray = new NumberArray();
        const result = numberArray.getSum()
        expect(result).toBe(6)
    })
})