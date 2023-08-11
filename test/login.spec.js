// importamos la funcion que vamos a testear
import { authWithGoogle, loginUser } from '../src/lib';
import login from '../src/components/login';
import { provider, auth } from '../src/firebase/initializeFirebase';

jest.mock('../src/lib/index');
jest.mock('../src/firebase/initializeFirebase', () => ({
  signInWithRedirect: jest.fn(),
  provider: jest.fn(),
  auth: jest.fn(),
}));

describe('login', () => {
  const navigateToMock = jest.fn();
  const loginComponent = login(navigateToMock);
  const inputEmail = loginComponent.querySelector('.input-email');
  const inputPass = loginComponent.querySelector('.input-pass');
  const submitButton = loginComponent.querySelector('.button-input');
  beforeEach(() => {
    document.body.innerHTML = '';
    document.body.appendChild(loginComponent);
  });

  it('should toggle password visibility when clicking the togglePassword button', () => {
    const toggleButton = loginComponent.querySelector('#togglePassword');
    expect(inputPass.getAttribute('type')).toBe('password');
    toggleButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(inputPass.getAttribute('type')).toBe('text');
    toggleButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(inputPass.getAttribute('type')).toBe('password');
  });

  it('should display a modal with an error message when login fails', async () => {
    loginUser.mockRejectedValue(new Error('Invalid password'));
    inputEmail.value = 'john@example.com';
    inputPass.value = 'wrongpassword';
    submitButton.click();
    await Promise.resolve();
    expect(loginComponent.querySelector('.message-modal').textContent).toBe('Passwords don\'t match');
  });

  it('should call authWithGoogle when clicking on the Google button', () => {
    const buttonGoogle = loginComponent.querySelector('.button-google');
    buttonGoogle.click();
    expect(authWithGoogle).toHaveBeenCalledTimes(1);
  });

  it('should call navigateTo when clicking on the Register button', () => {
    const buttonRegister = loginComponent.querySelector('.no-button');
    buttonRegister.click();
    expect(navigateToMock).toHaveBeenCalledWith('/register');
  });

  it('should close the modal when clicking the close button', () => {
    const closeModal = loginComponent.querySelector('.close');
    const containerModal = loginComponent.querySelector('.modal');
    closeModal.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(containerModal.style.display).toBe('none');
  });
});
