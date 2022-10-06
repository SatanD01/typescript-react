// Enum это такой же тип как и Union только более универсальней
// Внем передается переменная а уже через знак присвоение его значение
// Как по мне она лучше чем Union тип, так как даже если мы изменим знаение переменной
// Код не сломается
enum ShapeKind {
    Circle  = 1,
    Square = 2
}

const myShape = ShapeKind.Circle;

interface Circle {
    kind: ShapeKind.Circle,
    radius: number
}

interface Square {
    kind: ShapeKind.Square,
    sideLength: number
}

const circle1: Circle = {
    radius: 2,
    kind: ShapeKind.Circle
}

enum StatusCode {
    ERROR = 500,
    NOT_FOUND = 404,
    NOT_AUTH = 403
}

enum Grades {
    Junior = 'junior',
    Middle = 'middle',
    Senior = 'senior'
}

interface Dev {
    login: string,
    level: Grades,
    skills: string[]
}

const dev2: Dev = {
    level: Grades.Junior,
    login: 'mish',
    skills: ['Js', 'React']
}

function upGrade(user: {level: Grades}) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle
    } else if (user.level === Grades.Middle) {
        user.level = Grades.Senior
    }
}