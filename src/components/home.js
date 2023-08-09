import { signInEP, signInWithGoogle } from '../lib';

function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const logo = document.createElement('img');
  const login = document.createElement('button');
  const errorMessage = document.createElement('p');
  const registerUser = document.createElement('button');
  const passwordLogin = document.createElement('input');
  const emailLogin = document.createElement('input');
  const nameLogin = document.createElement('input');
  const buttonGoogle = document.createElement('button');
  const h3 = document.createElement('h3');

  title.textContent = 'Las Recetas de ahora';
  nameLogin.placeholder = 'Usuario';
  emailLogin.placeholder = 'email';
  passwordLogin.placeholder = 'Contraseña';
  registerUser.textContent = 'Registrarse';
  login.textContent = 'Ingresar';
  logo.src = './imagenes/image.png';
  buttonGoogle.textContent = 'Continuar con Google';
  h3.textContent = '¡Unete a CocinArte hoy mismo!';
  errorMessage.style.color = 'red';

  const googleLogo = document.createElement('img');
  googleLogo.src = './imagenes/logo_google.avif';
  buttonGoogle.appendChild(googleLogo);

  buttonGoogle.classList.add('google-button');

  registerUser.addEventListener('click', () => {
    navigateTo('/register');
  });

  buttonGoogle.addEventListener('click', async () => {
    try {
      await signInWithGoogle();
      navigateTo('/feed');
    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });

  login.addEventListener('click', async () => {
    const email = emailLogin.value;
    const password = passwordLogin.value;

    if (email && password) {
      try {
        await signInEP(email, password);
        navigateTo('/feed');
      } catch (error) {
        errorMessage.textContent = error.message;
      }
    } else {
      errorMessage.textContent = 'Por favor, ingresa un correo y una contraseña válida.';
    }
  });
  section.append(logo, title, nameLogin, passwordLogin, emailLogin, login);
  section.append(errorMessage, registerUser, buttonGoogle, h3);
  return section;
}
export default home;
