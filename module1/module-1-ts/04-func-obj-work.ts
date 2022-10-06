interface User {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
}

interface Admin {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
    role: string
}

const user1: User = {
    login: 'josh',
    email: 'josh@mail.com',
    password: 'admin',
    isOnline: true,
    lastVisited: new Date(2022, 7, 12),
}

const admin1: Admin = {
    login: 'josh',
    email: 'josh@mail.com',
    password: 'admin',
    isOnline: true,
    lastVisited: new Date(2022, 6, 2),
    role: 'admin'
}

function login(user: {
    login: string,
    password: string
}):void {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log(`Hello ${user.login}`)
    }
}

login(user1);
login(admin1);