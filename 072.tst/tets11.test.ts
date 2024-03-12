// 11. Создайте класс StringManipulator, который имеет свойство text (строка) и методы:
// getCharacterCount(): number - возвращает количество символов в тексте.
// getWords(): string[] - возвращает массив слов из текста.
// getReversedText(): string - возвращает текст в обратном порядке.

interface iStringManipulator {
  text: string;
  getCharacterCount(): number;
  getWords(): string[];
  getReversedText(): string;
}

class StringManipulator implements iStringManipulator {
  constructor(text: string) {
    this.text = text;
  }

  text: string;

  getCharacterCount(): number {
    return this.text.length;
  }
  getWords(): string[] {
    return this.text.split(" ");
  }
  getReversedText(): string {
    return this.text.split("").reverse().join("");
  }
}

const stringManipulator = new StringManipulator("dima dima");

describe("string manipulator test", () => {
  test("character count", () => {
    const res = stringManipulator.getCharacterCount();
    expect(res).toBe(9);
  });
  test("get words", () => {
    const res = stringManipulator.getWords();
    expect(res).toEqual(["dima", "dima"]);
  });
  test("reverse text", () => {
    const res = stringManipulator.getReversedText();
    expect(res).toBe("amid amid");
  });
});
