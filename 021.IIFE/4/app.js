// Напишите функцию, которая принимает массив строк и находит строку с
// максимальной длиной. Добавить проверки

const arr = ["asfd", "sdfasd", "sadfssdaf32qrasdaewsdasdasderfsdsdaf32qrasdaewsdasdasderfsdsdaf32qrasdaewsdasdasderfsdsdaf32qrasdaewsdasdasderfsdsdaf32qrasdaewsdasdasderfsddfdsafasdf", "sdaf32qrasdaewsdasdasderfsd"];

function chechSTR(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  const res = arr.filter(function(el){
    if(el.length === max){
      return el
    }
  })

  return res
}

const res = chechSTR(arr);
console.log(res);
