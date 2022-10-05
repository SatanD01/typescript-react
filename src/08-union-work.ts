type Level = 'junior' | 'middle' | 'senior';


interface Developer {
    login: string,
    skills: string[],
    level: Level,
}


function gradeDeveloper(developer: { level: Level }, newLevel: Level)  {
    developer.level = newLevel;
}

const dev1: Developer  = {
    login: 'dev',
    skills: ['js', 'react'],
    level: 'junior'
}

gradeDeveloper(dev1, 'senior')

