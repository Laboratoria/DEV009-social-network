import register from '../src/components/register';
import { createUser, signInWithGoogle } from '../src/lib/index';

const navigateToMock = jest.fn();
const registerMock = register(navigateToMock);

jest.mock('../src/lib/index', () => ({
  createUser: jest.fn((email, password) => {
    if (email === 'test@example.com' && password === '123456') {
      return Promise.resolve({ emailVerified: false });
    } else if (email === 'test@example.com' && password === '12') {
    return Promise.reject({ error : 'contraseña menor a seis caracteres.' });
    } else if (email === 'testexample.com' && password === '123456') {
      return Promise.reject({ error : 'correo esta invalido.' });}
    return Promise.resolve({ emailVerified: true });
  }),
  signInWithGoogle: jest.fn(() => {
    return Promise.resolve({ emailVerified: false });
  }),
}));

describe('función crear usuario', () => {
  beforeEach(() => {
    createUser.mockClear();
  });

  const emailInput = registerMock.querySelector('.input-email');
  const passwordInput = registerMock.querySelector('.input-password');
  const buttonRegister = registerMock.querySelector('.button-register');
  const buttonGoole = registerMock.querySelector('.button-google');
  const errorMessage = registerMock.querySelector('.error-mesagge');

  emailInput.value = '';
  passwordInput.value = '';

  test('deberia dejar un usuario ingresar con correo y contraseña', async () => {
    emailInput.value = 'test@verified.com';
    passwordInput.value = '123456789';
    buttonRegister.click();
    await Promise.resolve();
    expect(createUser).toHaveBeenCalledWith('test@verified.com', '123456789');
    expect(navigateToMock).toHaveBeenCalledWith('/feed');
  });

  test('Debería mostrar un mensaje de error al ingresar una contraseña menor a 6 caracteres', () => {
    expect(createUser('test@example.com', '12')).rejects.toEqual({
          error: 'contraseña menor a seis caracteres.',
    });
  });

  test('debería dejar decirnos que ingresemos un correo y una contraseña válida', async () => {
    expect(createUser('testexample.com', '123456')).rejects.toEqual({
      error: 'correo esta invalido.',
});
  });

  test('deberia iniciar sesión con Google', async () => {
    buttonGoole.click();
    await Promise.resolve();
    expect(signInWithGoogle).toHaveBeenCalledWith();
    expect(navigateToMock).toHaveBeenCalledWith('/feed');
  });
});
