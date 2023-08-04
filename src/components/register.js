import { registerUser } from '../lib/index';
import { signInWithRedirect, auth, provider } from '../firebase/initializeFirebase';

function register(navigateTo) {
  const section = document.createElement('section');
  const formRegister = document.createElement('form');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const title = document.createElement('h2');
  const message = document.createElement('p');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const containerLogin = document.createElement('div');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputUserName = document.createElement('input');
  const inputName = document.createElement('input');
  const inputConfirmPass = document.createElement('input');
  const containerModal = document.createElement('div');
  const windowModalError = document.createElement('div');
  const titleModal = document.createElement('h3');
  const messageModal = document.createElement('p');
  const closeModal = document.createElement('span');
  const buttonGoogle = document.createElement('button');
  const IconGoogle = document.createElement('span');
  const textContent = 'Sign In';
  const line = document.createElement('hr');

  let whereToGo = '/register';

  inputEmail.type = 'email';
  inputPass.type = 'password';
  inputPass.minLength = '6';
  inputUserName.type = 'text';
  inputUserName.minLength = '2';
  inputName.type = 'text';
  inputName.minLength = '2';
  inputConfirmPass.type = 'password';
  inputConfirmPass.minLength = '6';
  buttonRegister.type = 'submit';

  inputName.placeholder = 'Name';
  inputUserName.placeholder = 'Username';
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Password';
  inputConfirmPass.placeholder = 'Confirm Password';

  title.textContent = 'Create account';
  message.textContent = 'Already have an account?';
  buttonLogin.textContent = 'Sign In';
  buttonRegister.textContent = 'Sign Up';
  titleModal.textContent = 'Alert';
  messageModal.textContent = 'Passwords don\'t match';

  closeModal.setAttribute('href', '#/register');
  closeModal.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

  formRegister.classList.add('login-view');
  header.classList.add('logo');
  logo.classList.add('logo');
  logo.setAttribute('src', './img/logo.png');
  buttonRegister.classList.add('button-input');
  buttonLogin.classList.add('no-button');
  containerLogin.classList.add('container-button-login');
  inputName.classList.add('input');
  inputUserName.classList.add('input');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');
  inputConfirmPass.classList.add('input');
  windowModalError.classList.add('modal-content');
  containerModal.classList.add('modal');
  closeModal.classList.add('close');
  IconGoogle.classList.add('fa-brands', 'fa-google');
  buttonGoogle.classList.add('button-google');

  windowModalError.append(closeModal, titleModal, line, messageModal);
  containerModal.append(windowModalError);

  header.appendChild(logo);
  containerLogin.append(message, buttonLogin);
  buttonGoogle.append(IconGoogle, textContent);
  formRegister.append(header, title, inputUserName, inputName, inputEmail, inputPass);
  formRegister.append(inputConfirmPass, buttonRegister, buttonGoogle, containerLogin);
  section.append(formRegister, containerModal);

  formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = inputName.value;
    const userName = inputUserName.value;
    const email = inputEmail.value;
    const password = inputPass.value;
    const confirmPass = inputConfirmPass.value;

    if (confirmPass === password) {
      try {
        await registerUser(name, userName, email, password);
        navigateTo('/welcome');
      } catch (error) {
        messageModal.textContent = 'The user already exists';
        whereToGo = '/login';
        containerModal.style.display = 'block';
      }
    } else {
      messageModal.textContent = "Passwords don't match";
      whereToGo = '/register';
      containerModal.style.display = 'block';
    }
  });

  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonGoogle.addEventListener('click', () => {
    signInWithRedirect(auth, provider);
  });

  closeModal.addEventListener('click', () => {
    containerModal.style.display = 'none';
    navigateTo(whereToGo);
  });
  return section;
}

export default register;
