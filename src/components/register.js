import { registerUser } from '../lib/credentials.js';

function register(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('registerSection');

  const title = document.createElement('h2');
  title.textContent = 'Registro de nuevo usuario';
  title.classList.add('titleregister');

  const inputName = document.createElement('input');
  inputName.placeholder = 'Nombre y Apellido';

  const inputUser = document.createElement('input');
  inputUser.placeholder = 'Usuario';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'correo electronico';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.pattern = '.{6,}';
  inputPassword.title = 'Debe ser mayor a 6 caracteres y maximo 10';

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';
  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    if (inputPassword.value === inputConfirmPassword.value) {
      registerUser(inputUser.value, inputPassword.value);
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
