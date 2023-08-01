import { loginUser } from '../lib/index';

function login(navigateTo) {
  const section = document.createElement('section');
  const formLogin = document.createElement('form');
  const title = document.createElement('h2');
  const message = document.createElement('p');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  inputPass.type = 'password';
  inputEmail.placeholder = 'Write your email';
  inputPass.placeholder = 'Write your password';
  title.textContent = 'Welcome Back';
  message.textContent = 'Don’t have an account?';
  buttonRegister.textContent = 'Sign Up';
  buttonLogin.textContent = 'Sign In';
  buttonLogin.type = 'submit';
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });
  formLogin.append(title, message, inputEmail, inputPass, buttonLogin, buttonRegister);
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
