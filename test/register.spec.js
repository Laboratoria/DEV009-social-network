import { createAccountWithEmail, authWithGoogle } from '../src/lib';
import register from '../src/components/register';
import { auth, provider } from '../src/firebase/initializeFirebase';

jest.mock('../src/lib/index', () => ({
  registerUser: jest.fn(),
  authWithGoogle: jest.fn(),
  auth: jest.fn(),
  provider: jest.fn(),
}));

const originalAlert = window.alert;
beforeEach(() => {
  window.alert = jest.fn();
});

afterEach(() => {
  window.alert = originalAlert;
});

describe('register', () => {
  const navigateToMock = jest.fn();
  const section = register(navigateToMock);
  beforeEach(() => {
    document.body.innerHTML = '';
    document.body.appendChild(section);
  });

  it('should register a new user with matching passwords', async () => {
    const inputName = section.querySelector('.input-name');
    const inputUserName = section.querySelector('.input-user-name');
    const inputEmail = section.querySelector('.input-email');
    const inputPass = section.querySelector('.input-pass');
    const inputConfirmPass = section.querySelector('.input-pass-confirm');
    const submitButton = section.querySelector('.button-input');
    inputName.value = 'John Doe';
    inputUserName.value = 'johndoe';
    inputEmail.value = 'john@example.com';
    inputPass.value = 'password123';
    inputConfirmPass.value = 'password123';
    submitButton.click();
    await Promise.resolve();
    expect(createAccountWithEmail).toHaveBeenCalledWith('John Doe', 'johndoe', 'john@example.com', 'password123');
    expect(navigateToMock).toHaveBeenCalledWith('/welcome');
  });

  it('should display an error modal when user already exists', async () => {
    createAccountWithEmail.mockRejectedValue(new Error('User already exists'));
    section.querySelector('.button-input').click();
    await Promise.resolve();
    const modal = section.querySelector('.modal');
    expect(getComputedStyle(modal).getPropertyValue('display')).toBe('block');
    expect(navigateToMock).toHaveBeenCalled();
    section.querySelector('.close').click();
    expect(getComputedStyle(section.querySelector('.modal')).getPropertyValue('display')).toBe('none');
  });

  it('should display a modal with an error message when passwords do not match', async () => {
    const inputPass = section.querySelector('.input-pass');
    const inputConfirmPass = section.querySelector('.input-pass-confirm');
    const submitButton = section.querySelector('.button-input');
    inputPass.value = 'password1';
    inputConfirmPass.value = 'password2';
    submitButton.click();
    await Promise.resolve();
    const modal = section.querySelector('.modal');
    expect(modal.style.display).toBe('block');
    const modalContent = section.querySelector('.modal-content p');
    expect(modalContent.textContent).toBe("Passwords don't match");
  });

  it('should call signInWithRedirect when clicking on the Google button', () => {
    const buttonGoogle = section.querySelector('.button-google');
    buttonGoogle.click();
    expect(authWithGoogle).toHaveBeenCalledWith(auth, provider);
  });

  it('should close the modal and navigate to appropriate location when clicking the close button', () => {
    const closeModal = section.querySelector('.close');
    closeModal.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(section.querySelector('.modal').style.display).toBe('none');
    expect(navigateToMock).toHaveBeenCalledWith('/register');
  });

  it('should navigate to login when clicking on the "Sign In" button', () => {
    const buttonLogin = section.querySelector('.no-button');
    buttonLogin.click();
    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });
});
