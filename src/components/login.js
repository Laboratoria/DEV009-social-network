import { signInWithPassword } from '../lib/index';

function login(navigateTo) {
  const divLogin = document.createElement('div');
  divLogin.className = 'divLogin';

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBon';

  const inputEmail = document.createElement('input');
  inputEmail.className = 'input inputEmail';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electronico');
  inputEmail.setAttribute('required', '');

  const inputPass = document.createElement('input');
  inputPass.className = 'input inputPass';
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'Ingresa tu contraseña');
  inputPass.setAttribute('required', '');

  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'button buttonLogin';
  buttonLogin.textContent = 'Inicia sesión';

  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'button buttonReturnLogin';
  buttonReturn.textContent = 'Regresar';

  const errorMessageL = document.createElement('p');
  errorMessageL.className = 'parrafo';
  errorMessageL.textContent = 'errorMessage';
  errorMessageL.style.display = 'none';
  errorMessageL.id = ' errorMessageL';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'button buttonGoogle';
  const strong = document.createElement('strong');
  strong.textContent = 'Google';
  strong.className = 'textGoogle';
  const imgGoogle = document.createElement('img');
  imgGoogle.className = 'imgGoogle';

  const textRegistrateCon = document.createElement('p');
  textRegistrateCon.className = 'parrafo';
  textRegistrateCon.textContent = 'O ingresa con...';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  divLogin.appendChild(logoBon);
  divLogin.append(inputEmail, inputPass);
  divLogin.appendChild(errorMessageL);
  divLogin.appendChild(buttonLogin);
  divLogin.appendChild(textRegistrateCon);
  divLogin.appendChild(buttonGoogle);
  buttonGoogle.append(imgGoogle, strong);
  divLogin.appendChild(buttonReturn);

  buttonLogin.addEventListener('click', () => {
    const emailValue = inputEmail.value;
    const passwordValue = inputPass.value;
    console.log(emailValue);
    if (emailValue === '' || passwordValue === '') {
      errorMessageL.style.display = 'block';
      errorMessageL.textContent = 'Los campos no pueden estar vacios';
    } else {
      const user = {
        email: emailValue,
        emailPassword: passwordValue,
      };
      signInWithPassword(user.email, user.emailPassword)
        .then(() => {
          navigateTo('/principal');
        });
    }
  });
  return divLogin;
}

export default login;
