// Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
//  happy new year -> happy NEW year

function changeWord() {
  const string = 'happy new year'.split(' ')
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) string[i] = string[i].toUpperCase();
    
  }
  console.log(string.join(" "));
}

changeWord();
