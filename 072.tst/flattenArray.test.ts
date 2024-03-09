// Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.

const res: any[] = [];

const flattenArray = (array: any[]): any[] => array.flat(Infinity);

describe("testing for flattenArray", () => {
  test("correct flatting", () => {
    const arr = [1, 2, 3, [], [2, [[2, 2, 2]]]];
    const arr2 = [2, 3, 4, 5, 2, [2, 3, 4]];
    const arrFlat = flattenArray(arr);
    const arrFlat2 = flattenArray(arr2);
    expect(arrFlat).toEqual([1, 2, 3, 2, 2, 2, 2]);
    expect(arrFlat2).toEqual([2, 3, 4, 5, 2, 2, 3, 4]);
  });
});
