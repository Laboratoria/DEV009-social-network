// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

import { home } from '../src/components/home';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

jest.mock('../src/lib/firebaseAuth.js', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signOut: jest.fn(),
  auth: jest.fn(),
}));

describe('home', () => {
  it('Debe redirigirse a la página de inicio de sesión al hacer clic en el botón de inicio de sesión', () => {
    const navigateToMock = jest.fn();

    const section = home(navigateToMock);

    const logInButton = section.querySelector('.boton-login');

    logInButton.click();

    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });

  it('Debe redirigirse a la página de registro al hacer clic en el botón de registro', () => {
    const navigateToMock = jest.fn();

    const section = home(navigateToMock);

    const registerButton = section.querySelector('.boton-registro');

    registerButton.click();

    expect(navigateToMock).toHaveBeenCalledWith('/register');
  });
});
