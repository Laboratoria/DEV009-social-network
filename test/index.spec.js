// importamos la funcion que vamos a testear
import { registerWithEmail } from '../src/lib/index';

/* describe('test para la función registrarUsuario', () => {
  it('debería ser una función', () => {
    expect(typeof registrarUsuario).toBe('function');
  });
}); */

jest.mock('../src/lib/index');
describe('test para la función registerWithEmail', () => {
  it('debería recibir los valores de email, nombre y contraseña', () => {
    // Crear elementos y configurar valores simulados
    const emailValue = 'test@example.com';
    const nameValue = 'Usuario de Prueba';
    const passwordValue = 'contraseña123';

    buttonRegistro.click();

    expect(registerWithEmail).toHaveBeenCalledWith(
      emailValue,
      passwordValue,
      nameValue,
    );
  });
});
