function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any{
    return value[0];
}

const x = head([true]);
const y = head([1]);
const z = head('2');
