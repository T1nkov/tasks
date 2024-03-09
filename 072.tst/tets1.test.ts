// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

function isPalindrome(word: any): boolean | string {
  try {
    if (!word) throw new Error("empty string ");
    if (typeof word !== "string") throw new Error("data type not a string");
    if (!word.trim().length) throw new Error("empty string");
    return word == word.split("").reverse().join("") ? true : false;
  } catch (error: any) {
    return error.message;
  }
}

describe("test is Palindrome", () => {
  test("true", () => {
    const arr: string[] = ["mpm", "mam", "anna"];
    for (const el of arr) {
      const res = isPalindrome(el);

      expect(res).toBe(true);
    }
  });
  test("false", () => {
    const res = isPalindrome(555);

    expect(res).toBe("data type not a string");
  });
  test("false", () => {
    const res = isPalindrome(" ");

    expect(res).toBe("empty string");
  });
});
