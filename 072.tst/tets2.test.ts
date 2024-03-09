// Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: any): string {
  try {
    if (!str) throw new Error("str empty");
    if (typeof str !== "string") throw new Error("data type not a string");

    
    const arr: string[] = str.split(" ");
    const newArr: string[] = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(" ");
  } catch (error: any) {
    return error.message;
  }
}

describe("is capitalizeString", () => {
  test("true", () => {
    const res = capitalizeString("sdf");
    expect(res).toBe("Sdf");
  });
  test("false", () => {
    const res = capitalizeString(5);
    expect(res).toBe("data type not a string");
  });
  test("true", () => {
    const res = capitalizeString("df dsf sfd");
    expect(res).toBe("Df Dsf Sfd");
  });
});
