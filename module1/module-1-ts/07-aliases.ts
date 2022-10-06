// Такие типы нельзя написать в interface
type MyBoolean = false | true;

type Pair = [string, string];
type Pairs = Pair[];
// В Alias/type структура написания кода такая е как и в interface отличие только в знаке =
type DiffCar = {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,
    name?: string,

    [key: string]: unknown
}
