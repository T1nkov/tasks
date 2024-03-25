// . Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n: any): number {
  try {
    if (!n) throw new Error("n not found");
    if (typeof n != "number") throw new Error("not a number");
    if (n < 0) throw new Error("n<0");
    let res: number = 1;
    for (let i = 1; i < n + 1; i++) {
      res *= i;
    }
    return res;
  } catch (error: any) {
    return error.message;
  }
}

describe("test a calculation", () => {
  test("true", () => {
    const res = calculateFactorial(5);
    expect(res).toBe(120);
  });
  test("false", () => {
    const res = calculateFactorial("a");
    expect(res).toBe("not a number");
  });
  test("true", () => {
    const res = calculateFactorial(-10);
    expect(res).toBe("n<0");
  });
  test("true", () => {
    const res = calculateFactorial(-10);
    expect(res).toBe("n>0");
  });
});
