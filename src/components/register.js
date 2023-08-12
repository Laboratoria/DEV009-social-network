import { registerUser } from '../lib/credentials.js';

function register(navigateTo) {
  const inputs = {
    nombre: false,
    apellido: false,
    usuario: false,
    correo: false,
    contraseña: false,
  };

  const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //
    apellido: /^[a-zA-ZñÑ ]+$/, //
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //
    contraseña: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d_.+-]{6,10}$/, //
    confirmacionContraseña: /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,10}$/, //
  };

  const validarCampo = (input, expresion, divGroup, icon, errorMessage) => {
    input.addEventListener('keyup', (e) => {
      if (expresion.test(e.target.value)) {
        divGroup.classList.remove('formulario__grupo-incorrecto');
        divGroup.classList.add('formulario__grupo-correcto');
        icon.classList.add('fa-circle-check');
        icon.classList.remove('fa-circle-xmark');
        errorMessage.classList.remove('formulario__input-error-activo');
        inputs[expresion] = true;
      } else {
        divGroup.classList.add('formulario__grupo-incorrecto');
        divGroup.classList.remove('formulario__grupo-correcto');
        icon.classList.add('fa-circle-xmark');
        icon.classList.remove('fa-circle-check');
        errorMessage.classList.add('formulario__input-error-activo');
        inputs[expresion] = false;
      }
    });
  };
  const section = document.createElement('section');
  section.classList.add('registerSection');

  const title = document.createElement('h2');
  // title.textContent = 'Registro de nuevo usuario';
  title.textContent = 'Regístrate, ¡Únete a una comunidad de ma+padres increíbles!';
  title.classList.add('elementRegister-title');

  // input nombre
  const divGroupName = document.createElement('div');
  divGroupName.classList.add('formulario__grupo');
  divGroupName.id = 'grupo__nombre';
  divGroupName.id = 'inputName';

  const labelName = document.createElement('label');
  labelName.setAttribute('for', 'nombre');
  labelName.classList.add('formulario__label');
  const textLabelName = document.createTextNode('Nombre');
  labelName.appendChild(textLabelName);

  const divInputName = document.createElement('div');
  divInputName.classList.add('formulario__grupo-input');

  const inputName = document.createElement('input');
  inputName.classList.add('formulario__input');
  inputName.type = 'text';
  inputName.setAttribute('name', 'name');
  inputName.id = 'name';
  inputName.placeholder = '';
  inputName.autocomplete = 'off';

  const iconName = document.createElement('i');
  iconName.classList.add('formulario__validacion-estado', 'fa-solid', 'fa-circle-xmark');

  const errorMessageName = document.createElement('p');
  errorMessageName.classList.add('formulario__input-error');
  errorMessageName.textContent += 'Solo se permiten letras mayúsculas y minúsculas';

  divInputName.append(inputName, iconName);
  divGroupName.append(labelName, divInputName, errorMessageName);

  validarCampo(inputName, expresiones.nombre, divGroupName, iconName, errorMessageName);

  // input apellido
  const divGroupLastName = document.createElement('div');
  divGroupLastName.classList.add('formulario__grupo');
  divGroupLastName.id = 'grupo__LastName';
  divGroupName.id = 'inputLastName';

  const labelLastName = document.createElement('label');
  labelLastName.setAttribute('for', 'LastName');
  labelLastName.classList.add('formulario__label');
  const textLabelLastName = document.createTextNode('Apellido');
  labelLastName.appendChild(textLabelLastName);

  const divInputLastName = document.createElement('div');
  divInputLastName.classList.add('formulario__grupo-input');

  const inputLastName = document.createElement('input');
  inputLastName.classList.add('formulario__input');
  inputLastName.type = 'text';
  inputLastName.setAttribute('name', 'LastName');
  inputLastName.id = 'LastName';
  inputLastName.placeholder = '';
  inputLastName.autocomplete = 'off';

  const iconLastName = document.createElement('i');
  iconLastName.classList.add('formulario__validacion-estado', 'fa-solid', 'fa-circle-xmark');

  const errorMessageLastName = document.createElement('p');
  errorMessageLastName.classList.add('formulario__input-error');
  errorMessageLastName.textContent += 'Solo se permiten letras mayúsculas y minúsculas';

  divInputLastName.append(inputLastName, iconLastName);
  divGroupLastName.append(labelLastName, divInputLastName, errorMessageLastName);

  validarCampo(
    inputLastName,
    expresiones.apellido,
    divGroupLastName,
    iconLastName,
    errorMessageLastName,
  );

  // input usuario
  const divGroupUser = document.createElement('div');
  divGroupUser.classList.add('formulario__grupo');
  divGroupUser.id = 'grupo__User';
  divGroupName.id = 'inputUser';

  const labelUser = document.createElement('label');
  labelUser.setAttribute('for', 'User');
  labelUser.classList.add('formulario__label');
  const textLabelUser = document.createTextNode('Nombre de Usuario:');
  labelUser.appendChild(textLabelUser);

  const divInputUser = document.createElement('div');
  divInputUser.classList.add('formulario__grupo-input');

  const inputUser = document.createElement('input');
  inputUser.classList.add('formulario__input');
  inputUser.type = 'text';
  inputUser.setAttribute('name', 'User');
  inputUser.id = 'User';
  inputUser.placeholder = '';
  inputUser.autocomplete = 'off';

  const iconUser = document.createElement('i');
  iconUser.classList.add('formulario__validacion-estado', 'fa-solid', 'fa-circle-xmark');

  const errorMessageUser = document.createElement('p');
  errorMessageUser.classList.add('formulario__input-error');
  errorMessageUser.textContent += 'Solo se permiten letras y números';

  divInputUser.append(inputUser, iconUser);
  divGroupUser.append(labelUser, divInputUser, errorMessageUser);

  validarCampo(inputUser, expresiones.usuario, divGroupUser, iconUser, errorMessageUser);

  // input Correo
  const divGroupEmail = document.createElement('div');
  divGroupEmail.classList.add('formulario__grupo');
  divGroupEmail.id = 'grupo__Email';
  divGroupName.id = 'inputEmail';

  const labelEmail = document.createElement('label');
  labelEmail.setAttribute('for', 'Email');
  labelEmail.classList.add('formulario__label');
  const textLabelEmail = document.createTextNode('Correo Electrónico:');
  labelEmail.appendChild(textLabelEmail);

  const divInputEmail = document.createElement('div');
  divInputEmail.classList.add('formulario__grupo-input');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('formulario__input');
  inputEmail.type = 'email';
  inputEmail.setAttribute('name', 'Email');
  inputEmail.id = 'Email';
  inputEmail.placeholder = '';
  inputEmail.autocomplete = 'off';

  const iconEmail = document.createElement('i');
  iconEmail.classList.add('formulario__validacion-estado', 'fa-solid', 'fa-circle-xmark');

  const errorMessageEmail = document.createElement('p');
  errorMessageEmail.classList.add('formulario__input-error');
  errorMessageEmail.textContent += 'Correo electrónico inválido';

  divInputEmail.append(inputEmail, iconEmail);
  divGroupEmail.append(labelEmail, divInputEmail, errorMessageEmail);

  inputEmail.addEventListener('focusout', () => {
    if (inputEmail.checkValidity()) {
      divGroupEmail.classList.remove('formulario__grupo-incorrecto');
      divGroupEmail.classList.add('formulario__grupo-correcto');
      iconEmail.classList.add('fa-circle-check');
      iconEmail.classList.remove('fa-circle-xmark');
      errorMessageEmail.classList.remove('formulario__input-error-activo');
    } else {
      divGroupEmail.classList.add('formulario__grupo-incorrecto');
      divGroupEmail.classList.remove('formulario__grupo-correcto');
      iconEmail.classList.add('fa-circle-xmark');
      iconEmail.classList.remove('fa-circle-check');
      errorMessageEmail.classList.add('formulario__input-error-activo');
    }
  });

  // input Contraseña
  const divGroupPassword = document.createElement('div');
  divGroupPassword.classList.add('formulario__grupo');
  divGroupPassword.id = 'grupo__Password';
  divGroupName.id = 'inputPassword';

  const labelPassword = document.createElement('label');
  labelPassword.setAttribute('for', 'Password');
  labelPassword.classList.add('formulario__label');
  const textLabelPassword = document.createTextNode('Contraseña');
  labelPassword.appendChild(textLabelPassword);

  const divInputPassword = document.createElement('div');
  divInputPassword.classList.add('formulario__grupo-input');

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('formulario__input');
  inputPassword.type = 'password';
  inputPassword.setAttribute('name', 'Password');
  inputPassword.id = 'Password';
  inputPassword.placeholder = '';
  inputPassword.autocomplete = 'off';

  const iconPassword = document.createElement('i');
  iconPassword.classList.add('formulario__validacion-estado', 'fa-solid', 'fa-circle-xmark');

  const errorMessagePassword = document.createElement('p');
  errorMessagePassword.classList.add('formulario__input-error');
  errorMessagePassword.textContent += 'Longitud entre 6 - 10 caracteres, y contener números y algún carácter especial';

  divInputPassword.append(inputPassword, iconPassword);
  divGroupPassword.append(labelPassword, divInputPassword, errorMessagePassword);

  inputPassword.addEventListener('focusout', (e) => {
    if (expresiones.contraseña.test(e.target.value)) {
      divGroupPassword.classList.remove('formulario__grupo-incorrecto');
      divGroupPassword.classList.add('formulario__grupo-correcto');
      iconPassword.classList.add('fa-circle-check');
      iconPassword.classList.remove('fa-circle-xmark');
      errorMessagePassword.classList.remove('formulario__input-error-activo');
    } else {
      divGroupPassword.classList.add('formulario__grupo-incorrecto');
      divGroupPassword.classList.remove('formulario__grupo-correcto');
      iconPassword.classList.add('fa-circle-xmark');
      iconPassword.classList.remove('fa-circle-check');
      errorMessagePassword.classList.add('formulario__input-error-activo');
    }
  });

  // input confirmacion Contraseña
  const divGroupConfirmPassword = document.createElement('div');
  divGroupConfirmPassword.classList.add('formulario__grupo');
  divGroupConfirmPassword.id = 'grupo__ConfirmPassword';
  divGroupName.id = 'inputConfirmPassword';

  const labelConfirmPassword = document.createElement('label');
  labelConfirmPassword.setAttribute('for', 'ConfirmPassword');
  labelConfirmPassword.classList.add('formulario__label');
  const textLabelConfirmPassword = document.createTextNode('Confirma contraseña');
  labelConfirmPassword.appendChild(textLabelConfirmPassword);

  const divInputConfirmPassword = document.createElement('div');
  divInputConfirmPassword.classList.add('formulario__grupo-input');

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.classList.add('formulario__input');
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.required = true;

  inputConfirmPassword.setAttribute('name', 'ConfirmPassword');
  inputConfirmPassword.id = 'ConfirmPassword';
  inputConfirmPassword.placeholder = '';
  inputConfirmPassword.autocomplete = 'off';

  const iconConfirmPassword = document.createElement('i');
  iconConfirmPassword.classList.add('formulario__validacion-estado', 'fa-solid', 'fa-circle-xmark');

  const errorMessageConfirmPassword = document.createElement('p');
  errorMessageConfirmPassword.classList.add('formulario__input-error');
  errorMessageConfirmPassword.textContent += 'Debe coincidir con la contraseña anterior';

  divInputConfirmPassword.append(inputConfirmPassword, iconConfirmPassword);
  divGroupConfirmPassword.append(
    labelConfirmPassword,
    divInputConfirmPassword,

    errorMessageConfirmPassword,
  );

  validarCampo(
    inputConfirmPassword,
    expresiones.confirmacionContraseña,
    divGroupConfirmPassword,
    iconConfirmPassword,
    errorMessageConfirmPassword,
  );

  // Error si algun campo esta vacio
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

  // Boton y mensaje de confirmacion exitoso
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
    divGroupName,
    divGroupLastName,
    divGroupUser,
    divGroupEmail,
    divGroupPassword,
    divGroupConfirmPassword,
    groupError,
    groupButton,
  );

  return section;
}

export default register;
