import registro from '../src/components/registro';
import { registerWithEmail } from '../src/lib/index';


jest.mock('../src/lib/index', () => ({
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({})),
  sendEmailVerification: jest.fn(() => Promise.resolve({})),
  updateProfile: jest.fn(() => Promise.resolve({})),
}));

const navigateTo = jest.fn();

describe('Funcion Registro', () => {
  const formRegistro = document.querySelector('.formRegistro');
  const inputName = document.querySelector('.displayName');
  const inputEmail = document.querySelector('.inputEmail');
  const inputPass = document.querySelector('.inputPass');

  it('debería enviar al muro si el registro es exitoso', () => {
    inputName.value = 'UserTest';
    inputEmail.value = 'email@test.com';
    inputPass.value = 'test123';
    formRegistro.submit();
    expect(registerWithEmail).toHaveBeenCalledWith('email@test.com', 'test123', 'UserTest');
  });

  it('Al dar click lleva a la pagina de Home', () => {
    document.body.append(registro(navigateTo));
    const btnReturn = document.querySelector('.buttonReturnRegistro');
    btnReturn.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});
