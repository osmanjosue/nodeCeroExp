import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises.ts', () => {

    test('getPokemonById should return a pokemon', async () => {

        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);

        expect(pokemonName).toBe('bulbasaur');

    });

    test('should return an error if the pokemon does not exist', async () => {

        const pokemonId = 1000000;

        try {
            await getPokemonById(pokemonId);
            expect(true).toBeFalsy(); //solo quiere hacer que falle el try
        } catch (error) {

            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
        }
    });
});
