/* const {getAge, getUUID} = require('./plugins') */
// const {emailTemplate} = require ('./js-foundation/01-template')
// require ('./js-foundation/02-destructuring')
// const {getUserById} = require( './js-foundation/03-callbacks');
// const {getUserById} = require( './js-foundation/04-arrow');
// require('./js-foundation/05-factory');



// console.log(emailTemplate);

const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(1)
.then(pokemon => console.log({pokemon}))
// .catch((err) => console.log('por favor intente de nuevo'))
.finally(()=>console.log('finally'))


















//! Referencia a la funcion factory y uso
/* const {buildMakePerson} = require ('./js-foundation/05-factory')

const makePerson = buildMakePerson({getUUID, getAge});


const obj = { name: 'john', birthdate: '1985-10-21'};

const john = makePerson(obj);

console.log({john}); */