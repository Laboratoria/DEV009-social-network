// importamos la funcion que vamos a testear
import { saveNewUser } from '../src/lib/credentials';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof saveNewUser).toBe('function');
  });
});
