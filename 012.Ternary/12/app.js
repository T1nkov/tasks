// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

const a = 123;


const b = Math.floor(a / 100); /// 1

const c = a - b * 100; // 23

const d = Math.floor(c / 10); /// 2

const e = c - d * 10; /// 3

const sum = b + d + e; 

const proiz  = b * d * e;
console.log(sum, proiz)