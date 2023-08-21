/**
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
import signup from '../src/components/signup.js';
import { registerUser, registerWithGoogle } from '../src/lib/index.js';
import {
  createUserWithEmailAndPassword,
  auth, signInWithPopup,
  provider,
} from '../src/firebase/initializeFirebase.js';

jest.mock('../src/firebase/initializeFirebase.js', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  auth: jest.fn(),
  signInWithPopup: jest.fn(),
  provider: jest.fn(),
}));

const callback = jest.fn();
const navigateTo = jest.fn();
const signupComponent = signup(navigateTo);

describe('Test para la función registerUser', () => {
  const email = 'logout@gmail.com';
  const pass = 'Kk654321';

  it('debería ser una función', () => {
    expect(typeof registerUser).toBe('function');
  });

  it('debería llamar a la función de firebase createUserWithEmailAndPassword', async () => {
    await registerUser(email, pass, callback);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('debería recibir los parámetros de la función createUserWithEmailAndPassword', async () => {
    await registerUser(email, pass, callback);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });
});

describe('Test para redireccionar navigateTo', () => {
  test('debería redireccionar al login al hacer click en el btn de ya tienes una cuenta', () => {
    const redirectionate = signupComponent.querySelector('.toLogin');
    redirectionate.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
  test('Debería redireccionar al muro al completar su registro', () => {
    const register = signupComponent.querySelector('.formRegister');
    register.submit();
    expect(navigateTo).toHaveBeenCalled();
  });
  test('Debería redireccionar al muro cuando el usuario termine su registro', () => {
    const registerUserComplete = signupComponent.querySelector('.formRegister');
    registerUserComplete.submit();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});

//              ---      Test Register with Google      --            //
describe('Test para la función registerWithGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof registerWithGoogle).toBe('function');
  });
  it('debe llamar a la funcion de signInWithPopup', async () => {
    await registerWithGoogle(callback);
    expect(signInWithPopup).toHaveBeenCalled();
  });
  it('debería recibir los parámetros de la función signInWithPopup', async () => {
    await registerWithGoogle(callback);
    expect(signInWithPopup).toHaveBeenCalledWith(auth, provider);
  });
  it('debería redireccionar a regisrarse con Google', () => {
    const registerWthGoogleComponent = signupComponent.querySelector('.signupWithGmail');
    registerWthGoogleComponent.click();
    expect(navigateTo).toHaveBeenCalled();
  });
});
