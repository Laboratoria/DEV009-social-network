// importamos la funcion que vamos a testear
import { registerWithEmail} from '../src/lib/index';

describe('test para la función registrarUsuario', () => {
  it('debería ser una función', () => {
    expect(typeof registrarUsuario).toBe('function');
  });
});
