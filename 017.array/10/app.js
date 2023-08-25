// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

let arr = ["afadfs", "asfdsdf", 1, 3, 4, "asgsd"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "number") {
    console.log(arr[i]);
  }
}
