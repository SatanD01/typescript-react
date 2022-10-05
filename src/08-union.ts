// В Union типах используется ограниценное количество переменных и их уточнение в дальнейшем в функциях

type Status = 'ok' | 'loading' | 'error';

const staticX: Status = "loading";

const arr: (number | string)[] = []

function printId(id: number | string): void {
    // Так приводится уточнение типа переменной
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}


function welcome(person: [string, string] | string): number | string {
    // Так уточняется если переменная массив из 2 переменных
    if (Array.isArray(person)){
        console.log('hello', person.join(' '));
        return 1
    }else {
        console.log('hello', person);
        return person
    }
}