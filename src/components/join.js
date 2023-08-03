import { createAccount } from '../lib/index.js';

function join(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h3');
  title.textContent = 'Únete al SpookyVerse';

  const logologin = document.createElement('img');
  logologin.src = 'components/images/logo.png';
  logologin.setAttribute('id', 'logo-login-join');

  const joinForm = document.createElement('form');

  const userName = document.createElement('input');
  userName.className = 'input-login-join';
  userName.setAttribute('type', 'text');
  userName.setAttribute('placeholder', 'Nombre de usuario');
  userName.setAttribute('required', '');

  const emailInput = document.createElement('input');
  emailInput.className = 'input-login-join';
  emailInput.setAttribute('type', 'emailInput');
  emailInput.setAttribute('placeholder', 'Correo electronico');
  emailInput.setAttribute('required', '');

  const passwordInput = document.createElement('input');
  passwordInput.className = 'input-login-join';
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Crea tu contraseña');
  passwordInput.setAttribute('required', '');

  const buttonEnd = document.createElement('div');
  buttonEnd.className = 'buttonEnd';

  const btnEnter = document.createElement('button');
  btnEnter.className = 'button-login';
  btnEnter.textContent = 'Crear';
  btnEnter.setAttribute('type', 'submit');

  const btnReturn = document.createElement('button');
  btnReturn.className = 'button-return';
  btnReturn.textContent = 'Volver';
  btnReturn.setAttribute('type', 'button');
  btnReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonEnd.append(btnReturn, btnEnter);
  joinForm.append(userName, emailInput, passwordInput, buttonEnd);
  main.append(title, logologin, joinForm);

  joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    createAccount(email, password);
    navigateTo('/verification');
  });

  return main;
}

export default join;
