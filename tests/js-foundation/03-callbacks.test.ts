import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', () => { 
        test('GetUserById should return an error if user does not exists', (done) => { 
            const id = 10;
            getUserById(id, (err,user)=> {
                expect( err ).toBe(`User not found with id ${id}`);
                expect(user).toBeUndefined();
                done();
            });
         });

         test('GetUserById should return john doe when user id is 1', () => { 
            const id = 1;
            getUserById(id, (err, user)=> {
                expect(err).toBeUndefined();
                expect( user ).toEqual({id: 1, name: 'John Doe'});

            })
          })
 })