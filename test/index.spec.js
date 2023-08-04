// importamos la funcion que vamos a testear
// import { login } from '../src/components/login';
import { loginUser } from '../src/lib';
import { registerUser } from '../src/lib/index';
import { createUserWithEmailAndPassword, sendEmailVerification } from '../src/firebase/initializeFirebase';

jest.mock('../src/firebase/initializeFirebase');

describe('registerUser', () => {
  it('debe registrar un usuario correctamente', async () => {
    const email = 'test@example.com';
    const password = 'password123';
    const userCredential = { user: { uid: 'user123' } };
    createUserWithEmailAndPassword.mockResolvedValue(userCredential);

    sendEmailVerification.mockResolvedValue();
    const result = await registerUser('Test User', 'testuser', email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled(result);
  });
});

describe('login', () => {
  it('Should show login page', () => {
    expect(typeof loginUser).toBe('function');
  });
});

