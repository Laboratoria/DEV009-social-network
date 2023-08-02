import { loginUser } from '../lib/index';

function login(navigateTo) {
  const section = document.createElement('section');
  const formLogin = document.createElement('form');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const title = document.createElement('h2');
  const messageLogin = document.createElement('p');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const message = document.createElement('p');
  const buttonRegister = document.createElement('button');

  inputPass.type = 'password';
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Password';
  title.textContent = 'Welcome Back';
  messageLogin.textContent = 'Login to your account';
  message.textContent = 'Don’t have an account?';
  buttonRegister.textContent = 'Sign Up';
  buttonLogin.textContent = 'Sign In';
  buttonLogin.type = 'submit';

  formLogin.classList.add('login-view');
  header.classList.add('logo');
  logo.classList.add('logo');
  logo.setAttribute('src', './img/logo.png');
  buttonLogin.classList.add('button-input');
  buttonRegister.classList.add('no-button');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  header.appendChild(logo);
  formLogin.append(
    header,
    title,
    messageLogin,
    inputEmail,
    inputPass,
    buttonLogin,
    message,
    buttonRegister,
  );

  section.append(formLogin);
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPass.value;
    loginUser(email, password);
  });
  return section;
}
export default login;
