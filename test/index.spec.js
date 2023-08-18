// importamos la funcion que vamos a testear
// import signup from '../src/components/signup.js';
import { registerUser } from '../src/lib/index.js';
import { createUserWithEmailAndPassword, auth } from '../src/firebase/initializeFirebase.js';
import { callback } from '../src/components/signup.js';

jest.mock('../src/firebase/initializeFirebase.js', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  auth: jest.fn(),
}));

jest.mock('../src/components/signup.js', () => ({
  callback: jest.fn(),
}));

  // const navigateTo = jest.fn();
  // const signupComponent = signup(navigateTo);

describe('Test para la función registerUser', () => {
  const email = 'logout@gmail.com';
  const pass = 'Kk654321';

  beforeEach(() => {
    document.body.innerHTML = '';
    document.body.appendChild(signupComponent);
  });

  it('debería ser una función', () => {
    expect(typeof registerUser).toBe('function');
  });

  it('debería llamar a la función createUserWithEmailAndPassword', async () => {
    await registerUser(email, pass, callback);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('debería recibir los parámetros de la función createUserWithEmailAndPassword', async () => {
    //createUserWithEmailAndPassword.mockClear();
    await registerUser(email, pass, callback);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });

});

// describe('Test para redireccionar navigateTo', () => {
//   test('debería redireccionar al login al hacer click', () => {
//     const toLogin = document.createElement('p');
//     toLogin.classList.add('toLogin');
//     const redirectionate = signupComponent.querySelector('.toLogin');
//     redirectionate.click(); 
//     expect(navigateTo).toHaveBeenCalledWith('/');
//   });
// });
