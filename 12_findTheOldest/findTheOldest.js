function computeAge(person) {
    const currentYear = new Date().getFullYear();
    let yearOfDeath = person.yearOfDeath === undefined ? currentYear : person.yearOfDeath;
    return yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    people.forEach(person => {
        person.age = computeAge(person);
    });

    return people.reduce((acc, cur) => {
        return acc.age >= cur.age ? acc : cur
    });
    
};

// Do not edit below this line
module.exports = findTheOldest;
