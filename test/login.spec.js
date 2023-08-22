/**
 * @jest-environment jsdom
 */
import login from '../src/components/login.js';
import { loginUser } from '../src/lib/index.js';
import { auth, signInWithEmailAndPassword } from '../src/firebase/initializeFirebase.js';

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

  it('Debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('Debería llamar a la función de firebase singinWithEmailandPassword', async () => {
    await loginUser(email, pass, callback);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  it('Debería recibir los parámetros de la función login', async () => {
    await loginUser(email, pass, callback);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });
});

describe('Test para redireccionar navigateTo', () => {
  test('Debería redireccionar al hacer click en ¿aún no tienes cuenta?, ¡Regístrate!', () => {
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
