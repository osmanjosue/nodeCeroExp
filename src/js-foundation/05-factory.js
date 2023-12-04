const {v4: uuidv4} = require('uuid');
const getAge = require( 'get-age');

const buildPerson = ({name, birthdate}) => {
    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}

const obj = {name: 'john', birthdate: '1984-01-16'};

const john = buildPerson(obj);

console.log(john);