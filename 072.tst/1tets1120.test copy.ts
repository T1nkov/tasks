// 7. Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
// [number, number] | null, которая принимает массив чисел и целевую сумму, и
// возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
// такая пара не найдена, функция должна возвращать null.



function findPairWithSum(numbers, targetSum) {
    try {
        // let values = [targetSum - numbers[0]];

        for (let i = 0; i < numbers.length; i++) {
            let firstValue = targetSum - numbers[i]

            let secondValue = targetSum - firstValue

            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] == secondValue && numbers[j] == firstValue) {
                    //   console.log(numbers.includes(firstValue[i]));
    
                    return [firstValue, secondValue]
    
    
                } else {
                    // return null;
                }
                
            }
        }
        // return null;
    } catch (error) {
        return error.message
    }
}
const res21 = findPairWithSum([1, 2, 3, 4, 5, 6], 11);
console.log(res);


