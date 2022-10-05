"use strict";
const user1 = {
    login: 'josh',
    email: 'josh@mail.com',
    password: 'admin',
    isOnline: true,
    lastVisited: new Date(2022, 7, 12),
};
const admin1 = {
    login: 'josh',
    email: 'josh@mail.com',
    password: 'admin',
    isOnline: true,
    lastVisited: new Date(2022, 6, 2),
    role: 'admin'
};
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log(`Hello ${user.login}`);
    }
}
login(user1);
login(admin1);
