/**
 * @jest-environment jsdom
 */
// import * as authentication from 'firebase/auth';
import { resetPassword } from '../src/components/resetpassword';

// Mock para la función de redirección
const navigateToMock = jest.fn();

// mock para firebase authentication
jest.mock('firebase/auth', () => ({
  authentication: jest.fn(),
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  resetPasswordEmail: jest.fn(),
}));

describe('componente de restablecer contraseña', () => {
  let resetPasswordElement;
  // Configura el componente Home antes de cada prueba
  beforeEach(() => {
    resetPasswordElement = resetPassword(navigateToMock);
    document.body.appendChild(resetPasswordElement);
  });

  // Limpia después de cada prueba
  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  it('Deberia retornar a Home al hacer click en el boton de regreso', () => {
    const backButton = resetPasswordElement.querySelector('.back-button');
    backButton.click();
    expect(navigateToMock).toHaveBeenCalledWith('/');
  });

//   it('Debe dirigir a LogIn al dar click en enviar con un email', () => {
//     const email = document.querySelector('.email');
//     const btn = document.querySelector('.send-button');
//     email.value = 'faby.granados@gmail.com';
//     btn.click();
//     expect(navigateToMock).toHaveBeenCalledWith('/login');
//   });
});
