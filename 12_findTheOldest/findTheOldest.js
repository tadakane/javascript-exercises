const findTheOldest = function(arr) {
    const ages = arr.reduce((oldest, person) => {
        if (!oldest.yearOfDeath)
            oldest.yearOfDeath = new Date().getFullYear();
        if (!person.yearOfDeath)
            person.yearOfDeath = new Date().getFullYear();
        return oldest.yearOfDeath - oldest.yearOfBirth > person.yearOfDeath - person.yearOfBirth ? 
                                    oldest : person;
    });
    return ages;
};

// Do not edit below this line
module.exports = findTheOldest;
