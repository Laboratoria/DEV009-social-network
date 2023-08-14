function login(navigateTo) {
  const divLogin = document.createElement('divLogin');
  divLogin.className = 'divLogin';

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBon';

  const inputEmail = document.createElement('input');
  inputEmail.className = 'input inputEmail';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electronico');
  inputEmail.setAttribute('required', '');

  const inputPass = document.createElement('input');
  inputPass.className = 'input inputPass';
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'Crea tu contraseña');
  inputPass.setAttribute('required', '');

  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'button buttonLogin';
  buttonLogin.textContent = 'Inicia sesión';

  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'button buttonReturnLogin';
  buttonReturn.textContent = 'Regresar';

  const errorRegister = document.createElement('p');
  errorRegister.className = 'parrafo';
  errorRegister.textContent = 'errorMessage';
  errorRegister.style.display = 'none';
  errorRegister.id = 'errorRegister';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'button buttonGoogle';
  const strong = document.createElement('strong');
  strong.textContent = 'Google';
  strong.className = 'textGoogle';
  const imgGoogle = document.createElement('img');
  imgGoogle.className = 'imgGoogle';

  const textRegistrateCon = document.createElement('p');
  textRegistrateCon.className = 'parrafo';
  textRegistrateCon.textContent = 'O ingresa con...';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  divLogin.appendChild(logoBon);
  divLogin.append(inputEmail, inputPass);
  divLogin.appendChild(errorRegister);
  divLogin.appendChild(buttonLogin);
  divLogin.appendChild(textRegistrateCon);
  divLogin.appendChild(buttonGoogle);
  buttonGoogle.append(imgGoogle, strong);
  divLogin.appendChild(buttonReturn);

  return divLogin;
}

export default login;
