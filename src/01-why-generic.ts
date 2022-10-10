// generic тгжен для того что бы не дублировать варианты типов а сделать один меняющийся тип который применится ко всем

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any{
    return value[0];
}

interface ModelData {
    title: string,
    value: string // number [] boolean
}