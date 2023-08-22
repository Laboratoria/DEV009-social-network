/**
 * @jest-environment jsdom
 */
import * as authentication from 'firebase/auth';
import { resetPassword } from '../src/components/resetpassword';
// import { resetPasswordEmail } from '../src/lib/firebaseAuth';

// Mock para la función de redirección
const navigateToMock = jest.fn();

// mock para firebase authentication
jest.mock('firebase/auth', () => ({
  authentication: jest.fn(),
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  sendPasswordResetEmail: jest.fn().mockResolvedValue(true),
}));

describe('componente de restablecer contraseña', () => {
  let resetPasswordElement;
  // Configura el componente resetpwrd antes de cada prueba
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

  it('Debe dirigir a LogIn al dar click en enviar con un email', async () => {
    authentication.sendPasswordResetEmail.mockResolvedValue(true);
    const emailInput = document.querySelector('.email');
    emailInput.value = 'hola@hola.com';
    const sendButton = document.querySelector('.send-button');
    // Trigger the click event on the send button
    sendButton.click(sendButton);
    // Test that the necessary functions were called correctly
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });
});
