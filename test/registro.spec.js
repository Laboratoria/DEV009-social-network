import registro from '../src/components/registro';
import { registerWithEmail } from '../src/lib/index';

window.alert = jest.fn();

jest.mock('../src/lib/index', () => ({
  auth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({})),
  sendEmailVerification: jest.fn(() => Promise.resolve({})),
  updateProfile: jest.fn(() => Promise.resolve({})),
  registerWithEmail: jest.fn(() => Promise.resolve({})),
}));

const navigateTo = jest.fn();

describe('Funcion Registro', () => {
  document.body.append(registro(navigateTo));

  const inputName = document.querySelector('.displayName');
  const inputEmail = document.querySelector('.inputEmail');
  const inputPass = document.querySelector('.inputPass');

  it('Debería recibir los valores de email y contraseña', () => {
    inputName.value = 'UserTest';
    inputEmail.value = 'email@test.com';
    inputPass.value = 'test123';

    const btnRegistro = document.querySelector('.formRegistro');
    btnRegistro.submit();
    expect(registerWithEmail).toHaveBeenCalledWith('email@test.com', 'test123', 'UserTest');
  });

  it('Debería dirigir a la pagina Login una ves que el registro sea exitoso', () => {
    document.body.append(registro(navigateTo));
    const btnEnviar = document.querySelector('.formRegistro');
    btnEnviar.click();
    expect(navigateTo).toHaveBeenCalledWith('/login');
  });

  it('Debería dirigir a la pagina de Home al dar click en el botón regresar', () => {
    document.body.append(registro(navigateTo));
    const btnEnviar = document.querySelector('.buttonReturnRegistro');
    btnEnviar.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });

  it('Debería mostrar u ocultar la contraseña', () => {
    document.body.append(registro());
    const checkbox = document.querySelector('.show-password-checkbox');
    const password = document.querySelector('.inputPass');

    expect(password.type).toBe('password');

    checkbox.click();
    expect(password.type).toBe('text');

    checkbox.click();
    expect(password.type).toBe('password');
  });
});
