import { loginUser } from '../lib/index';
import { signInWithRedirect, auth, provider } from '../firebase/initializeFirebase';

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
  const option = document.createElement('p');
  const message = document.createElement('p');
  const buttonRegister = document.createElement('button');
  const containerRegister = document.createElement('div');
  const buttonGoogle = document.createElement('button');
  const IconGoogle = document.createElement('span');
  const textContent = 'Sign In';
  const containerModal = document.createElement('div');
  const windowModalError = document.createElement('div');
  const titleModal = document.createElement('h3');
  const messageModal = document.createElement('p');
  const closeModal = document.createElement('span');
  const line = document.createElement('hr');

  inputPass.type = 'password';
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Password';
  title.textContent = 'Welcome Back';
  messageLogin.textContent = 'Login to your account';
  option.textContent = 'Or Sign in with';
  message.textContent = 'Don’t have an account?';
  buttonRegister.textContent = 'Sign Up';
  buttonLogin.textContent = 'Sign In';
  buttonLogin.type = 'submit';
  titleModal.textContent = 'Alert';
  messageModal.textContent = 'Passwords don\'t match';

  closeModal.setAttribute('href', '#/register');
  closeModal.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

  formLogin.classList.add('login-view');
  header.classList.add('logo');
  logo.classList.add('logo');
  logo.setAttribute('src', './img/logo.png');
  buttonLogin.classList.add('button-input');
  buttonRegister.classList.add('no-button');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');
  IconGoogle.classList.add('fa-brands', 'fa-google');
  buttonGoogle.classList.add('button-google');
  containerRegister.classList.add('container-button-register');
  option.classList.add('text-with-line');
  windowModalError.classList.add('modal-content');
  containerModal.classList.add('modal');
  closeModal.classList.add('close');

  windowModalError.append(closeModal, titleModal, line, messageModal);
  containerModal.append(windowModalError);

  buttonGoogle.addEventListener('click', () => {
    signInWithRedirect(auth, provider);
  });

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  buttonGoogle.append(IconGoogle, textContent);
  containerRegister.append(message, buttonRegister);
  section.append(formLogin, containerModal);
  header.appendChild(logo);
  formLogin.append(
    header,
    title,
    messageLogin,
    inputEmail,
    inputPass,
    buttonLogin,
    option,
    buttonGoogle,
    containerRegister,
  );

  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPass.value;
    try {
      await loginUser(email, password);
    } catch (error) {
      messageModal.textContent = 'Wrong password ';
      containerModal.style.display = 'block';
    }
  });

  closeModal.addEventListener('click', () => {
    containerModal.style.display = 'none';
  });

  return section;
}
export default login;
