// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const nums = "+202346547612";

function isValidNum(nums) {
  try {
    if (!/^(\+|\-)[0-9]+$/gm.test(nums))
      throw new Error("в строке должны быть только числа");
    return true;
  } catch (error) {
    return error.message;
  }
}

const res = isValidNum(nums);

console.log(res);
