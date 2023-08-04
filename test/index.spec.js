// importamos la funcion que vamos a testear
import { registrarUsuario } from '../src/lib/index';

describe('test para la función registrarUsuario', () => {
  it('debería ser una función', () => {
    expect(typeof registrarUsuario).toBe('function');
  });
});
