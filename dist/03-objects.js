"use strict";
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: false,
};
car.brand = 'Mresedez';
const car2 = {
    wheels: 4,
    brand: 'Mersedez',
    type: "Sedan"
};
// Не известный ключ переменной go
car2['go'] = true;
