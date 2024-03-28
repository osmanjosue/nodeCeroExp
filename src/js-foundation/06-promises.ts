const { http } = require("../plugins");

export const getPokemonById = async (id: number | number): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

/*     return fetch(url)
        .then(res => res.json())
        .then(()=> {throw new Error('Pokemon no existe')})
        .then(pokemon => pokemon.name) */
        


/* const resp = await fetch( url );
const pokemon = await resp.json();
 */
// throw new Error('Pokemon no existe');

const pokemon = await http.get(url);

return pokemon.name

}