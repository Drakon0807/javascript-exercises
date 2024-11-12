function age(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function (arr) {
    return arr.reduce((oldest, person) => {
        const oldestAge = age(oldest.yearOfDeath, oldest.yearOfBirth);
        const personAge = age(person.yearOfDeath, person.yearOfBirth);

        return oldestAge > personAge ? oldest : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
