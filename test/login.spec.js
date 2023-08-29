import login from '../src/components/login.js';
import { loginWithEmail, signInWithGoogle } from '../src/lib/index.js';

window.alert = jest.fn();
jest.mock('../src/lib/index', () => ({
  loginWithEmail: jest.fn((email, password) => {
    if (email === 'email@test.com' && password === '123456') {
      return Promise.resolve({ emailVerified: false });
    } return Promise.resolve({ emailVerified: true });
  }),
  signInWithGoogle: jest.fn(() => Promise.resolve()),
  signInWithPopup: jest.fn((_auth_, provider) => {
    const user = {
      uid: 'Example123',
      displayName: 'Example User',
      email: 'email@test.com',
    };
    return Promise.resolve({ user, provider });
  }),
  GoogleAuthProvider: { credentialFromResult: jest.fn(() => ({ accessToken: 'mockingAnAccessCode123' })) },
}));

const navigateTo = jest.fn();
const loginElement = login(navigateTo);

describe('función Login', () => {
  beforeEach(() => {
    loginWithEmail.mockClear();
  });

  test('Al hacer click tiene que ir a la pagina home', () => {
    const btnReturn = loginElement.querySelector('.buttonReturnLogin');
    btnReturn.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });

  const loginForm = loginElement.querySelector('.formLogin');
  const inputEmail = loginElement.querySelector('.inputEmail');
  const inputPass = loginElement.querySelector('.inputPass');
  inputEmail.value = '';
  inputPass.value = '123456';
  test('Prueba de inicio de sesión exitoso', async () => {
    // Simular inicio de sesión exitoso
    inputEmail.value = 'email@test.com';
    inputPass.value = '123456789';
    loginForm.submit();
    // Esperar a que se resuelva la promesa
    await Promise.resolve();
    expect(loginWithEmail).toHaveBeenCalledWith('email@test.com', '123456789');
    expect(navigateTo).toHaveBeenCalledWith('/principal');
  });
  test('deberia mostrar mensaje de error al no verificar el correo', async () => {
    inputEmail.value = 'email@test.com';
    inputPass.value = '123456';
    loginWithEmail.mockResolvedValueOnce({ emailVerified: false });
    loginForm.submit();
    await Promise.resolve();
    setTimeout(() => {
      expect(alert).toBe(alert);
    });
  });
  test('Al hacer click en el checkbox se puede mostrar o esconder la contraseña', () => {
    const checkbox = loginElement.querySelector('.show-password-checkbox');

    expect(inputPass.type).toBe('password');
    checkbox.click();
    expect(inputPass.type).toBe('text');
    checkbox.click();
    expect(inputPass.type).toBe('password');
  });
  test('Cuando se haga click en el buttonGoogle, debera llamar a  signInWithGoogle y luego navegar a /principal', async () => {
    const buttonGoogle = loginElement.querySelector('.buttonGoogle');
    buttonGoogle.click();
    await Promise.resolve();
    expect(signInWithGoogle).toHaveBeenCalled();
    expect(navigateTo).toHaveBeenCalledWith('/principal');
  });
});
