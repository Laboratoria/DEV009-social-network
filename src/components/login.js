function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  inputEmail.placeholder = 'Write your email';
  inputPass.placeholder = 'Write your password';

  title.textContent = 'Login!';
  buttonReturn.textContent = 'Return to Home';
  buttonLogin.textContent = 'Go';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(title, inputEmail, inputPass, buttonLogin, buttonReturn);
  return section;
}

export default login;
