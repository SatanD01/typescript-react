function add(a: number, b: number) : number;
function add(a: string, b: string) : string;
function add (a: any, b: any): any {
    return a + b;
}

add('1', '2');
add(1, 2);

type AsyncCb = (res: number) => number;

function AsyncSum (a: number, b: number): Promise<number>;
function AsyncSum (a: number, b: number, cb: AsyncCb): number;
function AsyncSum (a: number, b: number, cb?: AsyncCb): any{
    const result = a +b;
    if (cb){
        return cb(result);
    }

    return Promise.resolve(result);
}

AsyncSum(1, 2);