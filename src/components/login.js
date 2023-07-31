function login(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h3');
  title.textContent = 'Ingrese al SpookyVerse';

  const loginForm = document.createElement('form');

  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electronico');
  email.setAttribute('required', '');

  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');
  password.setAttribute('required', '');

  const btnEnter = document.createElement('button');
  btnEnter.textContent = 'Entrar';
  btnEnter.setAttribute('type', 'submit');

  const btnReturn = document.createElement('button');
  btnReturn.textContent = 'Volver';
  btnReturn.setAttribute('type', 'button');
  btnReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  const forgotPassword = document.createElement('a');
  forgotPassword.className = 'forgot-password';
  forgotPassword.setAttribute('href', '/');
  forgotPassword.textContent = 'olvidé mi contraseña';

  loginForm.append(email, password, forgotPassword, btnEnter, btnReturn);
  main.append(title, loginForm);

  return main;
}

export default login;
