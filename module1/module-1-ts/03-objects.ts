interface Car {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,
    name?: string,
    // так указываются не известные ключи переменных
    [key: string]: unknown,
}

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: false,
}

car.brand = 'Mresedez';

const car2: Car  = {
    wheels: 4,
    brand: 'Mersedez',
    type: "Sedan"
}
// Не известный ключ переменной go
car2['go'] = true

