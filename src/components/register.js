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
  inputEmail.placeholder = 'Correo electrónico';

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputRegister'); 
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.pattern = "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  inputPassword.addEventListener('input', () => {
      if (inputPassword.validity.patternMismatch) {
          inputPassword.setCustomValidity('La contraseña debe cumplir con los criterios requeridos.');
      } else {
          inputPassword.setCustomValidity('');
      }
  });

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.classList.add('inputRegister'); 
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.placeholder = 'Confirmar contraseña';
  inputConfirmPassword.addEventListener('input', () => {
    if (inputPassword.value !== inputConfirmPassword.value) {
      inputConfirmPassword.setCustomValidity('Las contraseñas no coinciden');
    } else {
      inputConfirmPassword.setCustomValidity('');
    }
  });

  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    if (inputPassword.value === inputConfirmPassword.value && inputEmail.checkValidity()) {
      registerUser(inputUser.value, inputPassword.value);
      navigateTo('/timeline');
    } else {
      alert('Por favor corrige los campos marcados antes de continuar.');
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


