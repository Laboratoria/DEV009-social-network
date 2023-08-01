import { registerUser } from '../lib/index';

function register(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  inputEmail.type = 'email';
  inputPass.type = 'password';

  inputEmail.placeholder = 'Write your email';
  inputPass.placeholder = 'Write your password';

  title.textContent = 'Login';
  buttonReturn.textContent = 'Return to Home';
  buttonLogin.textContent = 'Go';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(title, inputEmail, inputPass, buttonLogin, buttonReturn);
  buttonLogin.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    registerUser(email, password);
  });

  return section;
}

export default register;
