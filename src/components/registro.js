import { registerWithEmail } from '../lib/index';

function registro(navigateTo) {
  const divRegister = document.createElement('div');
  divRegister.className = 'divRegister';

  const headerRegistro = document.createElement('header');
  headerRegistro.className = 'headerRegistro';

  const logoBonBon = document.createElement('img');
  logoBonBon.className = 'logoBon';

  const mainRegistro = document.createElement('main');
  mainRegistro.className = 'mainRegistro';

  const formRegistro = document.createElement('form');
  formRegistro.className = 'formRegistro';

  const inputName = document.createElement('input');
  inputName.className = 'input displayName';
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre de Usuario');
  inputName.required = true;

  const inputEmail = document.createElement('input');
  inputEmail.className = 'input inputEmail';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electronico');
  inputEmail.required = true;

  const inputPass = document.createElement('input');
  inputPass.className = 'input inputPass';
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'Crea tu contraseña');
  inputPass.setAttribute('minlength', '6');
  inputPass.required = true;

  const showPassword = document.createElement('div');
  showPassword.className = 'show-password';

  const showPasswordText = document.createElement('label');
  showPasswordText.className = 'show-password-text';
  showPasswordText.setAttribute('for', 'password-checkbox');
  showPasswordText.textContent = 'Mostrar contraseña';

  const showPasswordCheckbox = document.createElement('input');
  showPasswordCheckbox.className = 'show-password-checkbox';
  showPasswordCheckbox.setAttribute('type', 'checkbox');
  showPasswordCheckbox.setAttribute('name', 'password-checkbox');

  showPasswordCheckbox.addEventListener('click', () => {
    inputPass.type = inputPass.type === 'password'
      ? inputPass.type = 'text'
      : inputPass.type = 'password';
  });

  showPassword.append(showPasswordCheckbox, showPasswordText);

  const buttonRegistro = document.createElement('input');
  buttonRegistro.setAttribute('type', 'submit');
  buttonRegistro.className = 'button buttonEnviarRegistro';
  buttonRegistro.textContent = 'Registro';

  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'button buttonReturnRegistro';
  buttonReturn.textContent = 'Regresar';

  const errorRegister = document.createElement('p');
  errorRegister.className = 'parrafo';
  errorRegister.style.display = 'none';
  errorRegister.id = 'errorRegister';

  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = inputEmail.value;
    const nameValue = inputName.value;
    const passwordValue = inputPass.value;

    registerWithEmail(
      emailValue,
      passwordValue,
      nameValue,
    )
      .then(() => {
        alert('Correo de verificación enviado');
        navigateTo('/login');
      })
      .catch(() => {
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Ya existe una cuenta para ese correo electrónico o el correo es inválido.';
      });
  });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  divRegister.append(headerRegistro, mainRegistro);

  headerRegistro.append(logoBonBon);
  mainRegistro.append(formRegistro, buttonReturn);
  formRegistro.append(
    inputName,
    inputEmail,
    inputPass,
    showPassword,
    errorRegister,
    buttonRegistro,
  );

  return divRegister;
}

export default registro;
