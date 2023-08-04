function login(navigateTo) {
  const section = document.createElement('section');
  const buttonReturn = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  inputEmail.placeholder = 'Escribe email';
  inputPass.placeholder = 'Contraseña';

  buttonLogin.textContent = 'Login';

  buttonReturn.textContent = 'back to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  section.append(inputEmail, inputPass, buttonLogin, buttonReturn);
  return section;
}

export default login;
