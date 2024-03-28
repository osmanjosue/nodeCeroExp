import { getAge } from '../plugins/get-age.plugin';
// const { getAge, getUUID } = require('../plugins') //no es necesrio poner index, lo encuentra rapidamente
interface BuildMakePersonOptions{
    getUUID: ()=> string;
    getAge: (birthdate: string)=> number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}


export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {
    
    return ({name, birthdate}:PersonOptions) => {
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