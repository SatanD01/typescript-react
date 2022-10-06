interface IProduct {
    title: string
    price: number,
    isNew: boolean,
    isSale?: boolean,
}

interface IVehicle {
    wheels: number,
    year: number,
    brand: string
}

interface ICar extends IProduct, IVehicle{
    type: string,
    model: string
}

// const Car: ICar = {}

type Product = {
    title: string
    price: number,
    isNew: boolean,
    isSale?: boolean,
}

type Vehicle = {
    wheels: number,
    year: number,
    brand: string
}

type Car = {
    type: string,
    model: string
} & Product & Vehicle

// const car: Car = {}