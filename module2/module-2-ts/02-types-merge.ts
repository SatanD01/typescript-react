type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
// здесь в примере конкатенируется обе union
type Union3 = Union1 | Union2;
// а тут конкатенируется только те знаение которые одинаковые
type Union6 = Union1 & Union2;
// Если работает с объектами то мы получаем все переменные
type Union5 = {
    a: string,
    b: string,
    c: number
} & {
    a: string,
    t: boolean,
    z: null
}

type User  = {
    readonly email: string,
    readonly login: string,
    password: string
}

type Person  = {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirthday?: number
}

type Employee  = {
    contractStart: Date,
} & User & Person

type Developer = {
    skills: string[],
    phone: string,
    level?: 'junior' | 'middle' | 'senior',
    say(): void,
    code?: (arg: string) => void
} & Employee

export {}