function login(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('loginSection');

  const title = document.createElement('h2');
  title.textContent = '¡Conéctate, comparte y descubre \n junto a otros papás como tú!';
  title.classList.add('titleLogin');

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email'; 
  inputEmail.placeholder = 'Correo electrónico';
  inputEmail.classList.add('inputEmail');

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password'; 
  inputPassword.placeholder = 'Contraseña';
  inputPassword.classList.add('inputPassword');
  inputPassword.pattern='.{6,}';
  inputPassword.required=true;
  

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

  const logo = document.createElement('img');
  logo.src = './images/logoblanco.png';
  logo.classList.add('logo');

  section.append(title, inputEmail, inputPassword, buttonStartSession, buttonCreateAccount);

  return (logo, section);
}
export default login;
