// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->
const cod = "<!--kjdsafhaskjfhjksd-->";

function deleteComm(cod) {
  try {
    if(!/<!--(.|\n)*?-->/gm.test(cod)) throw new Error ('нет комментариев')
    return cod.replaceAll("/<!--(.|\n)*?-->/gm", "");
    
  } catch (error) {
    return error.message;
  }
}

const res = deleteComm(cod);
console.log(res);
