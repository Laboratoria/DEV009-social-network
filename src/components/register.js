import { registerUser } from '../lib/index';

function register(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('registerSection');

  const title = document.createElement('h2');
  title.textContent = 'Registro de nuevo usuario';
  title.classList.add('titleregister');
  const inputUser = document.createElement('input');
  const inputName = document.createElement('input');
  const inputPassword = document.createElement('input');
  const inputConfirmPassword = document.createElement('input');

  inputUser.placeholder = 'Usuario / correo electrónico';
  inputName.placeholder = 'Nombre y Apellido';
  inputPassword.placeholder = 'Contraseña';
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';

  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    if (inputPassword.value === inputConfirmPassword.value) {
      registerUser(inputName.value, inputUser.value, inputPassword.value);
      navigateTo('/timeline');
    }
  });

  section.append(
    title,
    inputUser,
    inputName,
    inputPassword,
    inputConfirmPassword,
    buttonCreateAccount,
  );

  return section;
}
export default register;
