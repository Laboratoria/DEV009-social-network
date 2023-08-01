import { logInUser } from '../lib/firebaseAuth.js';

export const login = (navigateTo) => {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  logo.src = './recursos/LogoSinLetras.png';
  const title = document.createElement('h2');
  title.classList.add('inicio-sesion');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('botones-inicio-sesion');

  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Regresar';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  const buttonLog = document.createElement('button');
  title.textContent = 'Inicio de sesion';
  buttonLog.textContent = 'Iniciar sesion';
  buttonLog.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    const logInAlert = (valid) => {
      if (valid === true) {
        navigateTo('/muro');
      }
    };
    logInUser(email, password, logInAlert);
  });

  inputEmail.placeholder = 'Escribe tu Email';
  inputPass.placeholder = 'Contraseña';

  buttonContainer.append(buttonLog, buttonReturn);
  section.append(logo, title, inputEmail, inputPass, buttonContainer);
  return section;
};
