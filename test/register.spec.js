import register from '../src/components/register';
import { createUser, signInWithGoogle } from '../src/lib/index';

const navigateToMock = jest.fn();
const registerMock = register(navigateToMock);

jest.mock('../src/lib/index', () => ({
  createUser: jest.fn((email, password) => {
    if (email === 'test@example.com' && password === '12') {
      return Promise.reject(new Error('contraseña menor a seis caracteres.'));
    }
    if (email === 'testexample.com' && password === '123456') {
      return Promise.reject(new Error('correo inválido.'));
    }
    return Promise.resolve({ emailVerified: true });
  }),
  signInWithGoogle: jest.fn(() => Promise.resolve({ emailVerified: false })),
}));

describe('función crear usuario', () => {
  beforeEach(() => {
    createUser.mockClear();
  });

  const emailInput = registerMock.querySelector('.input-email');
  const passwordInput = registerMock.querySelector('.input-password');
  const buttonRegister = registerMock.querySelector('.button-register');
  const buttonGoole = registerMock.querySelector('.button-google');

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

  test('Debería mostrar un mensaje de error al ingresar una contraseña menor a 6 caracteres', async () => {
    await expect(createUser('test@example.com', '12')).rejects.toThrow('contraseña menor a seis caracteres.');
  });

  test('debería dejar decirnos que ingresemos un correo y una contraseña válida', async () => {
    await expect(createUser('testexample.com', '123456')).rejects.toThrow('correo inválido.');
  });

  test('deberia iniciar sesión con Google', async () => {
    buttonGoole.click();
    await Promise.resolve();
    expect(signInWithGoogle).toHaveBeenCalledWith();
    expect(navigateToMock).toHaveBeenCalledWith('/feed');
  });
});
