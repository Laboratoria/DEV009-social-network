/**
 * @jest-environment jsdom
 */
import login from '../src/components/login.js';
import { loginUser } from '../src/lib/index.js';
import { auth, signInWithEmailAndPassword } from '../src/firebase/initializeFirebase.js';
import { async } from 'regenerator-runtime';

jest.mock('../src/firebase/initializeFirebase', () => ({
  signInWithEmailAndPassword: jest.fn(),
  auth: jest.fn(),
}));
const callback = jest.fn();
const navigateTo = jest.fn();
const loginComponent = login(navigateTo);

describe('Test para la funcion Login User', () => {
  const email = 'logout@gmail.com';
  const pass = 'Kk654321';

  it('deberia ser una function', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('debería llamar a la funcion de firebase singinWithEmailandPassword', async () => {
    await loginUser(email, pass, callback);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  it('debería recibir los parametros de la funcion login', async () => {
    await loginUser(email, pass, callback);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });
});

describe('Test para redireccionar navigateTo', () => {
  test('debería redireccionar al hacer click en aun no tienes cuenta, Registrate!', () => {
    const redirectionate = loginComponent.querySelector('.toSignup');
    redirectionate.click();
    expect(navigateTo).toHaveBeenCalledWith('/signup');
  });
  test('Debería redireccionar al muro al completar su registro', () => {
    const loginUserComplete = loginComponent.querySelector('.frmLogin');
    loginUserComplete.submit();
    expect(navigateTo).toHaveBeenCalled();
  });
  test('Debería redireccionar al muro', async () => {
    const loginUserCompleteWall = loginComponent.querySelector('.frmLogin');
    loginUserCompleteWall.submit();
    expect(navigateTo).toHaveBeenCalledWith('/wall');
  })
});
