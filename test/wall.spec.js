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
  it('Debería ser una función', () => {
    expect(typeof exitUser).toBe('function');
  });
  it('Debería llamar a la función de firebase signOut', async () => {
    await exitUser(callback);
    expect(signOut).toHaveBeenCalled();
  });
  it('Debería recibir los parámetros de la función signOut', async () => {
    await exitUser(callback);
    expect(signOut).toHaveBeenCalledWith(auth);
  });
});
