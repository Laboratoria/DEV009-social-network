import { registerUser } from '../lib/credentials.js';

function register(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('registerSection');

  const title = document.createElement('h2');
  title.textContent = 'Registro de nuevo usuario';
  title.classList.add('titleregister');

  const inputName = document.createElement('input');
  inputName.classList.add('inputRegister');
  inputName.placeholder = 'Nombre';
  inputName.addEventListener('input', () => {
    if (!/^[A-Za-z\s]+$/.test(inputName.value)) {
      inputName.setCustomValidity('El nombre no debe contener números ni caracteres especiales');
    } else {
      inputName.setCustomValidity('');
    }
  });

  const inputLastName = document.createElement('input');
  inputLastName.classList.add('inputRegister');
  inputLastName.placeholder = 'Apellido';
  inputLastName.addEventListener('input', () => {
    if (!/^[A-Za-z\s]+$/.test(inputLastName.value)) {
      inputLastName.setCustomValidity('El apellido no debe contener números ni caracteres especiales');
    } else {
      inputLastName.setCustomValidity('');
    }
  });

  const inputUser = document.createElement('input');
  inputUser.classList.add('inputRegister');
  inputUser.placeholder = 'Usuario';
  inputUser.addEventListener('input', () => {
    if (/\s/.test(inputUser.value)) {
      inputUser.setCustomValidity('El usuario no puede contener espacios en blanco');
    } else {
      inputUser.setCustomValidity('');
    }
  });

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputRegister');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'correo electronico';

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputRegister');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.pattern = '.{6,}';
  inputPassword.title = 'Debe ser mayor a 6 caracteres y maximo 10';

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.classList.add('inputRegister');
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';

  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    if (inputPassword.value === inputConfirmPassword.value && inputEmail.checkValidity()) {
      registerUser(inputUser.value, inputPassword.value);
      alert('Tu registro se ha completado con éxito. \n Gracias por unirte a Guide Ma+Pa!');
      navigateTo('/timeline');
    } else if (!inputEmail.checkValidity()) {
      alert('El formato de correo electrónico es incorrecto. Asegúrate de que esté escrito correctamente.');
    }
    else if (inputPassword.value != inputConfirmPassword.value) {
      alert('No coinciden las contraseñas');
    }
  });

  section.append(
    title,
    inputName,
    inputLastName,
    inputUser,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    buttonCreateAccount
  );

  return section;
}

export default register;





