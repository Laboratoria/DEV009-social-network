import { registerUser } from '../lib/credentials.js';

function register(navigateTo) {
  const inputs = {
    nombre: false,
    apellido: false,
    usuario: false,
    correo: false,
    contraseña: false,
  };
  const section = document.createElement('section');
  section.classList.add('registerSection');

  const title = document.createElement('h2');
  title.textContent = 'Registro de nuevo usuario';
  // title.classList.add('titleregister');
  title.classList.add('elementRegister-title');

  const inputName = document.createElement('input');
  inputName.classList.add('inputRegister');
  inputName.type = 'text';
  inputName.placeholder = 'Nombre';
  inputName.pattern = '^[a-zA-ZñÑ ]+$';
  inputName.title = 'Ingrese nombre válido';
  inputName.required = true;
  inputName.autocomplete = 'off';

  const inputLastName = document.createElement('input');
  inputLastName.classList.add('inputRegister');
  inputLastName.type = 'text';
  inputLastName.placeholder = 'Apellido';
  inputLastName.pattern = '^[a-zA-ZñÑ ]+$';
  inputLastName.autocomplete = 'off';
  inputLastName.required = true;

  const inputUser = document.createElement('input');
  // inputUser.classList.add('inputRegister');
  inputUser.classList.add('elementRegister-inputUser');
  inputUser.type = 'text';
  inputUser.placeholder = 'Usuario';
  inputUser.pattern = '^[A-Za-z0-9]+$';
  inputUser.autocomplete = 'off';
  inputUser.required = true;

  const inputEmail = document.createElement('input');
  // inputEmail.classList.add('inputRegister');
  inputEmail.classList.add('elementRegister-inputEmail');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Correo electrónico';
  inputEmail.required = true;

  const inputPassword = document.createElement('input');
  // inputPassword.classList.add('inputRegister');
  inputPassword.classList.add('elementRegister-inputPassword');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.pattern = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d_.+-]{6,10}$';
  inputPassword.title = 'Debe ser mayor a 6 caracteres y máximo 10';
  inputPassword.autocomplete = 'off';
  inputPassword.required = true;

  const buttonShowPassword = document.createElement('button');
  buttonShowPassword.textContent = 'Mostrar Contraseña';
  buttonShowPassword.classList.add('showPassword');
  buttonShowPassword.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  const inputConfirmPassword = document.createElement('input');
  // inputConfirmPassword.classList.add('inputRegister');
  inputConfirmPassword.classList.add('elementRegister-inputConfirmPassword');
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.classList.add('inputRegister');
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';
  inputConfirmPassword.required = true;

  const groupError = document.createElement('div');
  groupError.classList.add('form-message');
  groupError.setAttribute('id', 'form-message');
  const errorText = document.createElement('span');
  const message = document.createElement('span');
  message.textContent = ' completa todos los campos.';
  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-triangle-exclamation');
  const wordError = document.createElement('b');
  wordError.textContent = ' Error:';
  errorText.append(wordError, message);
  groupError.append(icon, errorText);

  const groupButton = document.createElement('div');
  groupButton.classList.add('formulario__grupo', 'formulario__grupo-btn-enviar');
  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('formulario__btn');
  const successfulMessage = document.createElement('p');
  successfulMessage.classList.add('formulario__mensaje-exito');
  successfulMessage.setAttribute('id', 'formulario__mensaje-exito');
  successfulMessage.textContent = '¡Formulario enviado exitosamente!';

  buttonCreateAccount.addEventListener('click', () => {
    if (inputs.nombre && inputs.apellido && inputs.usuario
      && inputs.correo && inputs.contraseña) {
      registerUser(inputEmail.value, inputPassword.value);
      // Falta verificar que se haya creado la cuenta satisfactoriamente
      successfulMessage.classList.add('formulario__mensaje-exito-activo');
    } else {
      groupError.classList.add('form-message-activo');
    }
  });

  groupButton.append(buttonCreateAccount, successfulMessage);

  section.append(
    title,
    inputName,
    inputLastName,
    inputUser,
    inputEmail,
    inputPassword,
    buttonShowPassword,
    inputConfirmPassword,
    groupError,
    groupButton,
  );

  return section;
}

export default register;
