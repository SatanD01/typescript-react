"use strict";
function gradeDeveloper(developer, newLevel) {
    developer.level = newLevel;
}
const dev1 = {
    login: 'dev',
    skills: ['js', 'react'],
    level: 'junior'
};
gradeDeveloper(dev1, 'senior');
