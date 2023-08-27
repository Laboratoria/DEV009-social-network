import { loginWithEmail, signInWithGoogle } from '../lib/index';

function login(navigateTo) {
  const divLogin = document.createElement('div');
  divLogin.className = 'divLogin';

  const headerLogin = document.createElement('header');
  headerLogin.className = 'headerLogin';

  const logoBonBon = document.createElement('img');
  logoBonBon.className = 'logoBon';

  const mainLogin = document.createElement('main');
  mainLogin.className = 'mainLogin';

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

  divLogin.append(headerLogin, mainLogin);
  headerLogin.appendChild(logoBonBon);
  mainLogin.append(formLogin, textRegistrateCon, buttonGoogle, buttonReturn);
  formLogin.append(inputEmail, inputPass, showPassword, buttonLogin);
  buttonGoogle.append(imgGoogle, strong);

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = inputEmail.value;
    const passwordValue = inputPass.value;
    loginWithEmail(emailValue, passwordValue)
      .then((user) => {
        if (user.emailVerified) {
          navigateTo('/principal');
        } else {
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
