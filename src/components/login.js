import { loginUser } from '../lib/index.js';
import logoImportado from '../img/logo.png';

function login(navigateTo) {
  const container = document.createElement('div');
  const section = document.createElement('section');
  const frmLogin = document.createElement('form');
  const logo = document.createElement('img');
  const title = document.createElement('h2');
  const email = document.createElement('input');
  const password = document.createElement('input');
  const btnLogin = document.createElement('button');
  const toSignup = document.createElement('p');

  const logoParaMostrar = logoImportado;
  logo.src = logoParaMostrar;
  title.textContent = 'Ingresa a tu sesión';
  email.placeholder = 'Correo';
  password.placeholder = 'Contraseña';
  password.type = 'password';
  btnLogin.textContent = 'Iniciar sesión';
  toSignup.textContent = '¿Aún no tienes cuenta? ¡Regístrate!';

  container.classList.add('landingContainer');
  section.classList.add('sectionLogin');
  frmLogin.classList.add('frmLogin');
  logo.classList.add('logoLogin');
  title.classList.add('title');
  email.classList.add('infoLogin', 'email');
  password.classList.add('infoLogin');
  toSignup.classList.add('toSignup');
  btnLogin.classList.add('btnLogin');

  frmLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailUser = email.value;
    const passUser = password.value;
    const alertLogin = (boolean) => {
      if (boolean) {
        navigateTo('/wall');
      }
    };
    loginUser(emailUser, passUser, alertLogin);
  });
  toSignup.addEventListener('click', () => {
    navigateTo('/signup');
  });
  container.append(section);
  section.append(logo, title, frmLogin, toSignup);
  frmLogin.append(email, password, btnLogin);
  return container;
}
export default login;
