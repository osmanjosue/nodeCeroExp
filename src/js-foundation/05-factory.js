// const { getAge, getUUID } = require('../plugins') //no es necesrio poner index, lo encuentra rapidamente

const buildMakePerson = ({ getUUID, getAge }) => {
    
    return ({name, birthdate}) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }

}


// const obj = {name: 'john', birthdate: '1984-01-16'};

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
    buildMakePerson,
}