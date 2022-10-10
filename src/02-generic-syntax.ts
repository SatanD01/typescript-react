// Array<string> - generic
// string[] - standard
// Promise<number>

type TypeFactory<T> = T
type XType = TypeFactory<String>
type XType2 = TypeFactory<String>
type XType3 = TypeFactory<Boolean>

function toArray<T>(...arg: T[]): T[] {
    return arg;
}

toArray<number>(1, 2, 3)
toArray('ad', 'as')


function head(value: string): string;
function head(value: []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any{
    return value[0];
}

head(['asd', 'asd'])

const head1 = <T>(value: T[]): T => value[0]

interface ModelData<T> {
    title: string,
    value: T // number [] boolean
}

const obj: ModelData<number> = {
    title: 'asd',
    value: 12
}

// obj.value = true

const obj2: ModelData<Array<number>> = {
    title: "1123d",
    value: [21312]
}

