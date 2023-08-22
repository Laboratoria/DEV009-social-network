/**
 * @jest-environment jsdom
 */

import * as authentication from 'firebase/auth';
import { login } from '../src/components/login';

// Mock para la función de redirección
const navigateToMock = jest.fn();

// mock para firebase authentication
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  GoogleAuthProvider: jest.fn(),
}));

describe('componente de inicio de sesion', () => {
  let loginElement;

  // Configura el componente Home antes de cada prueba
  beforeEach(() => {
    loginElement = login(navigateToMock);
    document.body.appendChild(loginElement);
  });

  // Limpia después de cada prueba
  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  it('Deberia retornar a Home al hacer click en el boton de regreso', () => {
    const backButton = loginElement.querySelector('.back-button');
    backButton.click();
    expect(navigateToMock).toHaveBeenCalledWith('/');
  });
  it('Debe mostar vista de Reset password al dar click en ¿Olvidaste tu contraseña?', () => {
    const passwordReset = loginElement.querySelector('#password-reset');
    passwordReset.click();
    expect(navigateToMock).toHaveBeenCalledWith('/resetpassword');
  });

  it('Debe mostar un mensaje al dar click en inicio de sesion sin llenar los campos de email y contraseña', async () => {
    authentication.signInWithEmailAndPassword.mockRejectedValue(new Error('Firebase: Error (auth/wrong-password).'));
    const email = document.querySelector('.email');
    const pass = document.querySelector('.pass');
    const btn = document.querySelector('.login-button');
    email.value = '';
    pass.value = '';
    btn.click();
    const message = document.querySelector('.login-error');
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(message.textContent).toBe('Oh no ~Inténtalo de nuevo~');
  });
});
