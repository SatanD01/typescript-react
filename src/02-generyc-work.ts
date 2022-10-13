function append<T>(el: T, list: T[]): T;
function append(el: any, list: any): any {
    return list.concat(el)
}

append('as', ['asd'])