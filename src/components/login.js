import { loginWithEmail, signInWithGoogle } from '../lib/index';

function login(navigateTo) {
  const divLogin = document.createElement('div');
  divLogin.className = 'divLogin';

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBon';
  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';
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

  const buttonLogin = document.createElement('input');
  buttonLogin.className = 'button buttonLogin';
  buttonLogin.setAttribute('type', 'submit');
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

  divLogin.append(logoBon, formLogin);
  formLogin.append(inputEmail, inputPass, errorMessageL, buttonLogin);
  divLogin.appendChild(textRegistrateCon);
  divLogin.appendChild(buttonGoogle);
  buttonGoogle.append(imgGoogle, strong);
  divLogin.appendChild(buttonReturn);

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = inputEmail.value;
    const passwordValue = inputPass.value;
    loginWithEmail(emailValue, passwordValue)
      .then((user) => {
        if (user.emailVerified) {
          navigateTo('/principal');
        } else{
          alert('Primero verifica tu correo electrónico');
        }
      });
  });

  buttonGoogle.addEventListener('click', () => {
    signInWithGoogle()
      .then(() => {
        navigateTo('/principal');
      })
      .catch(() => {
        navigateTo('/'); // si nos marca error nos manda al home
      });
  });
  return divLogin;
}

export default login;
