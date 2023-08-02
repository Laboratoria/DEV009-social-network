function login(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h3');
  title.textContent = 'Ingrese al SpookyVerse';

  const logologin = document.createElement('img');
  logologin.src = 'components/images/logo.png';
  logologin.setAttribute('id', 'logo-login-join');

  const loginForm = document.createElement('form');

  const email = document.createElement('input');
  email.className = 'input-login-join';
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electronico');
  email.setAttribute('required', '');

  const password = document.createElement('input');
  password.className = 'input-login-join';
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');
  password.setAttribute('required', '');

  const buttonEnd = document.createElement('div');
  buttonEnd.className = 'buttonEnd';

  const btnEnter = document.createElement('button');
  btnEnter.className = 'button-login';
  btnEnter.textContent = 'Entrar';
  btnEnter.setAttribute('type', 'submit');

  const btnReturn = document.createElement('button');
  btnReturn.className = 'button-return';
  btnReturn.textContent = 'Volver';
  btnReturn.setAttribute('type', 'button');
  btnReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  const forgotPassword = document.createElement('a');
  forgotPassword.className = 'forgot-password';
  forgotPassword.setAttribute('href', '/');
  forgotPassword.textContent = 'Olvidé mi contraseña';

  buttonEnd.append(btnReturn, btnEnter);
  loginForm.append(email, password, forgotPassword, buttonEnd);
  main.append(title, logologin, loginForm);

  return main;
}

export default login;
