// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму. 12345 = 1
// 0+2
// 1+3
// 2+4
// 3+5
// 4

const nums = "123l45".split("");

function isValidNums(nums) {
  const res = nums.every((el) => !isNaN(el));
  if(!res) throw new Error ('str') 
}

function updateNums(nums) {
  try {
    isValidNums(nums);

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i] ** i;
    }
    return sum;
  } catch (error) {
    return error.message;
  }
}

const res = updateNums(nums);

console.log(res);
