import { createAccountWithEmail, authWithGoogle } from '../src/lib/index';
import register from '../src/components/register';

jest.mock('../src/lib/index', () => ({
  createAccountWithEmail: jest.fn(),
  authWithGoogle: jest.fn(),
  signInWithPopup: jest.fn(),
}));

describe('register', () => {
  const navigateToMock = jest.fn();
  const registerComponent = register(navigateToMock);
  const inputName = registerComponent.querySelector('.input-name');
  const inputEmail = registerComponent.querySelector('.input-email');
  const inputPass = registerComponent.querySelector('.input-pass');
  const inputConfirmPass = registerComponent.querySelector('.input-pass-confirm');
  const submitButton = registerComponent.querySelector('.button-input');
  const modal = registerComponent.querySelector('.modal');
  const closeModal = registerComponent.querySelector('.close');

  beforeEach(() => {
    document.body.innerHTML = '';
    document.body.appendChild(registerComponent);
  });

  it('should register a new user with matching passwords', async () => {
    inputName.value = 'John Doe';
    inputEmail.value = 'john@example.com';
    inputPass.value = 'password123';
    inputConfirmPass.value = 'password123';

    submitButton.click();
    await Promise.resolve();

    expect(createAccountWithEmail).toHaveBeenCalledWith('John Doe', 'john@example.com', 'password123');
    expect(navigateToMock).toHaveBeenCalledWith('/welcome');
  });

  it('should display an error modal when registration fails due to existing user', async () => {
    createAccountWithEmail.mockRejectedValue({ code: 'auth/email-already-in-use' });

    submitButton.click();
    await Promise.resolve();

    expect(getComputedStyle(modal).getPropertyValue('display')).toBe('block');
    closeModal.click();
    expect(getComputedStyle(registerComponent.querySelector('.modal')).getPropertyValue('display')).toBe('none');
  });

  it('should display a modal with an error message when passwords do not match', async () => {
    inputPass.value = 'password1';
    inputConfirmPass.value = 'password2';

    submitButton.click();
    await Promise.resolve();

    expect(getComputedStyle(modal).getPropertyValue('display')).toBe('block');
    const modalContent = registerComponent.querySelector('.modal-content p');
    expect(modalContent.textContent).toBe("Passwords don't match");
  });

  it('should call authWithGoogle when clicking on the Google button', () => {
    const buttonGoogle = registerComponent.querySelector('.button-google');
    buttonGoogle.click();
    expect(authWithGoogle).toHaveBeenCalledTimes(1);
  });

  it('should close the modal and navigate to appropriate location when clicking the close button', () => {
    closeModal.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(registerComponent.querySelector('.modal').style.display).toBe('none');
    expect(navigateToMock).toHaveBeenCalledWith('/register');
  });

  it('should navigate to login when clicking on the "Sign In" button', () => {
    const buttonLogin = registerComponent.querySelector('.no-button');
    buttonLogin.click();
    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });
});
