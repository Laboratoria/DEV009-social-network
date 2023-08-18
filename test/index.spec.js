// importamos la funcion que vamos a testear
import { registerUser } from '../src/lib/index';
import { createUserWithEmailAndPassword, auth } from '../src/firebase/initializeFirebase.js';
import { callback } from '../src/components/signup.js';

jest.mock('../src/firebase/initializeFirebase.js', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  auth: jest.fn(),
}));

jest.mock('../src/components/signup.js', () => ({
  callback: jest.fn(),
}));

describe('Test para la función registerUser', () => {
  /* const callback = (boolean) => {
  }; */
  const email = 'logout@gmail.com';
  const pass = 'Kk654321';
  it('debería ser una función', () => {
    expect(typeof registerUser).toBe('function');
  });

  it('debería llamar a la función createUserWithEmailAndPassword', async () => {
    await registerUser(email, pass, callback);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('debería recibir los parámetros de la función createUserWithEmailAndPassword', async () => {
    createUserWithEmailAndPassword.mockClear();
    await registerUser(email, pass, callback);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });
});
