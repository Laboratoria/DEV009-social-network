function login(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('loginSection');

  const title = document.createElement('h2');
  title.textContent = 'Bienvenidos a Guide Ma+Pa';
  title.classList.add('titleLogin');

  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');

  inputUser.placeholder = 'Usuario / correo electrónico';
  inputPassword.placeholder = 'Contraseña';

  const buttonStartSession = document.createElement('button');
  buttonStartSession.textContent = 'Iniciar sesión';
  buttonStartSession.classList.add('startSession');
  buttonStartSession.addEventListener('click', () => {
    navigateTo('/timeline');
  });
  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    navigateTo('/register');
  });

  section.append(title, inputUser, inputPassword, buttonStartSession, buttonCreateAccount);

  return section;
}
export default login;
