// обычная Функция
function sum (a: number, b: number): number {
    return a + b;
}

// Стрелочная Функция
const sum2 = (a: number, b: number): number => {
 return  a + b;
}

// Функция в переменной
const sum3 = function (a: number, b: number): number {
    return  a + b;
}

// Вызов функции
sum(1, 2);

// Функция String с не обязательным передоваемым параметром и функция ничего не возвращаед
function log(name: string, userId?: string): void {
    console.log('hello', name, 'with Id', userId || 'anonym')
}

log('Sam', '12')

// Функция которая никогда не закончит свое выполнение при ошибке
function crash(): never {
    throw new Error('crash')
}

// Функция с массивным типом передаваемого параметра
function average(...nums: number[]) {
   const sum = nums.reduce((current, total) => current + total, 0);
   return sum / nums.length;
}
