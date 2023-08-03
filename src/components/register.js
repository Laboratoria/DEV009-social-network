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
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputUserName = document.createElement('input');
  const inputName = document.createElement('input');
  const inputConfirmPass = document.createElement('input');
  const containerModal = document.createElement('div');
  const windowModalError = document.createElement('div');
  const messageModal = document.createElement('p');
  const closeModal = document.createElement('span');
  const buttonGoogle = document.createElement('button');
  const textButtonGloogle = document.createElement('span');

  let whereToGo = '/register';

  inputEmail.type = 'email';
  inputPass.type = 'password';
  inputUserName.type = 'text';
  inputUserName.minLength = '2';
  inputName.type = 'text';
  inputName.minLength = '2';
  inputConfirmPass.type = 'password';
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
  messageModal.textContent = 'Passwords don\'t match';
  textButtonGloogle.textContent = 'Sign In';

  closeModal.setAttribute('href', '#/register');
  closeModal.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

  formRegister.classList.add('login-view');
  header.classList.add('logo');
  logo.classList.add('logo');
  logo.setAttribute('src', './img/logo.png');
  buttonRegister.classList.add('button-input');
  buttonLogin.classList.add('no-button');
  inputName.classList.add('input');
  inputUserName.classList.add('input');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');
  inputConfirmPass.classList.add('input');
  windowModalError.classList.add('modal-content');
  containerModal.classList.add('modal');
  closeModal.classList.add('close');
  buttonGoogle.classList.add('button-google', 'fa-brands', 'fa-google');

  windowModalError.append(closeModal, messageModal);
  containerModal.append(windowModalError);

  header.appendChild(logo);
  buttonGoogle.append(textButtonGloogle);
  formRegister.append(header, title, inputUserName, inputName, inputEmail, inputPass);
  formRegister.append(inputConfirmPass, buttonRegister, message, buttonLogin, buttonGoogle);
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
        // Handle the case when the user already exists
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
