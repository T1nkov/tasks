// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const path = "C:\\Users\\Admin\\Desktop\\test.txt";

function isValidPath(path) {
  try {
    if (
      !/^[A-Z]:(\\|\/)[a-zA-Z0-9]+(\\|\/)[a-zA-Z0-9]+(\\|\/)[a-zA-Z0-9]+(\\|\/)[a-zA-Z0-9]+\.[a-z0-9]+$/g.test(
        path
      )
    )
      throw new Error("error in path");
    return true;
  } catch (error) {
    return error.message;
  }
}

const res = isValidPath(path);

console.log(res);
