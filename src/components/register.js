import { registerUser } from '../lib/index';

function register(navigateTo) {
  const section = document.createElement('section');
  const formRegister = document.createElement('form');
  const title = document.createElement('h2');
  const message = document.createElement('p');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  inputEmail.type = 'email';
  inputPass.type = 'password';
  buttonRegister.type = 'submit';
  inputEmail.placeholder = 'Write your email';
  inputPass.placeholder = 'Write your password';
  title.textContent = 'Create account';
  message.textContent = 'Already have an account?';
  buttonLogin.textContent = 'Sign In';
  buttonRegister.textContent = 'Sign Up';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  formRegister.append(title, message, inputEmail, inputPass, buttonLogin, buttonRegister);
  section.append(formRegister);
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPass.value;
    registerUser(email, password);
  });
  return section;
}

export default register;
