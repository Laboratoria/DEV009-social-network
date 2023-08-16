// importamos la funcion que vamos a testear
import { registerUser } from '../src/lib/index';
import { createUserWithEmailAndPassword } from '../src/firebase/initializeFirebase.js';

jest.mock('../src/firebase/initializeFirebase.js', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  auth: jest.fn(),
}));

describe('Test para la fucnion registerUser', () => {
  it('debería ser una función', () => {
    expect(typeof registerUser).toBe('function');
  });

  it('deberia llamar a la funcion createUserWithEmailAndPassword', async () => {
    const callback = true;
    const email = 'user@correo.com';
    const pass = '123.Prueba';
    await registerUser(email, pass, callback);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(email, pass);
  });
});

// toHaveBeenCalled()
