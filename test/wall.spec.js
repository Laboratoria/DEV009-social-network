/**
 * @jest-environment jsdom
 */
import { exitUser } from '../src/lib/index.js';
import { auth, signOut } from '../src/firebase/initializeFirebase.js';
import wall from '../src/components/wall.js';

jest.mock('../src/firebase/initializeFirebase.js', () => ({
  signOut: jest.fn(),
  auth: jest.fn(),
}));

const callback = jest.fn();
const navigateTo = jest.fn();
const signOutComponent = wall(navigateTo);

describe('Test para las funciones de logOut', () => {
  it('debería ser una función', () => {
    expect(typeof exitUser).toBe('function');
  });
  it('debería llamar a la funcion de firebase signOut', async () => {
    await exitUser(callback);
    expect(signOut).toHaveBeenCalled();
  });
  it('debería recibir los parametros de la funcion signOut', async () => {
    await exitUser(callback);
    expect(signOut).toHaveBeenCalledWith(auth);
  });
});

describe('Test para redireccionar navigateTo', () => {
  test('debería redireccionar a login al dar click en el btn de cerrar sesión', () => {
    const redirectionateLogOut = signOutComponent.querySelector('.exit');
    redirectionateLogOut.click();
    expect(navigateTo).toHaveBeenCalled();
  });
});
