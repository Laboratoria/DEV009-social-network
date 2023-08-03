import { loginUser } from '../lib/index';
import { signInWithRedirect, auth, provider } from '../firebase/initializeFirebase';
import { async } from 'regenerator-runtime';

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
  const buttonGoogle = document.createElement('button');
  const textButtonGloogle = document.createElement('span');

  inputPass.type = 'password';
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Password';
  title.textContent = 'Welcome Back';
  messageLogin.textContent = 'Login to your account';
  message.textContent = 'Don’t have an account?';
  buttonRegister.textContent = 'Sign Up';
  buttonLogin.textContent = 'Sign In';
  buttonLogin.type = 'submit';
  textButtonGloogle.textContent = 'Sign In';

  formLogin.classList.add('login-view');
  header.classList.add('logo');
  logo.classList.add('logo');
  logo.setAttribute('src', './img/logo.png');
  buttonLogin.classList.add('button-input');
  buttonRegister.classList.add('no-button');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');
  buttonGoogle.classList.add('button-google', 'fa-brands', 'fa-google');

  buttonGoogle.addEventListener('click', () => {
    signInWithRedirect(auth, provider);
  });

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
    buttonGoogle,
  );

  buttonGoogle.append(textButtonGloogle);
  section.append(formLogin);
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPass.value;
    try {
      await loginUser(email, password);
    } catch (error) {
      alert('Wrong password ❌');
    }
  });
  return section;
}
export default login;
