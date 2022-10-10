function example1(x?: number | string) {
    if (typeof x === "number") {
        x.toFixed();
    } else if (typeof x === "string") {
        x.toUpperCase()
    }else if (x === undefined) {
        console.log('no value')
    } else  {
        x
    }
}

function example2(strs: string | string[] | null) {
    // if (typeof strs === "object"){}
    if (strs && typeof strs === "object") {
        strs.push();
    } else if (typeof strs === "string") {
        strs.toUpperCase();
    }
}

// если надо сузить тип 2 объектов то мы используем instanceof в условии

function example3(x: number[] | Date) {
    if (x instanceof Date){
        x.getFullYear()
    } else {
        x.concat()
    }
}


// при сужении 2 методов надо использовать ключ и in дальше сам ключ в функции

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
      return animal.swim()
    }
    return animal.fly()
}
export {}