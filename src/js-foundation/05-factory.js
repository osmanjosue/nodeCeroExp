const buildPerson = ({name, birthdate}) => {
    return {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate). getFullYear(),
    }
}

const obj = {name: 'john', birthdate: '1984-01-16'};

const john = buildPerson(obj);

console.log(john);