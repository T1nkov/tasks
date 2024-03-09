// . Напишите функцию chunkArray(array: any[], size: number): any[][], которая
// принимает массив и число size, и возвращает новый массив, разделенный на
// подмассивы указанного размера.

function chunkArray(arr: any[], size: number): any[][] {
  try {
    let newArr: any[] = [];

    if (size == 0) throw new Error("size cant be 0");
    if (!Array.isArray(arr)) throw new Error("is not array");
    if (!arr.length) throw new Error("arr empty");

    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  } catch (error: any) {
    return error.message;
  }
}

describe("test chunk arr", () => {
  test("get success", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const res = chunkArray(arr, 2);
    expect(res).toEqual([[1, 2], [3, 4], [5, 6]]);
    expect(res.length).toBeGreaterThan(0)
    expect(res).toHaveLength(3)
  });
  test("get success", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const res = chunkArray(arr, 0);
    expect(res).toBe('size cant be 0')
    
  });
});
