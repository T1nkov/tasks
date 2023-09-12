// Создайте объект textAnalyzer с полем text – строка и методом getTextLength,
// который возвращает длину текста, хранящегося в поле text. В задаче использовать
// контекст

const textAnalyzer = {
  text: "HI",
  getTextLength: function () {
    console.log(this.text.length);
  },
};

textAnalyzer.getTextLength()