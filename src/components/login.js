import { startSession, signInWithGoogle } from '../lib/credentials.js';

function login(navigateTo) {
  const sectionP = document.createElement('section');
  sectionP.classList.add('loginSectionMain');

  const logo = document.createElement('img');
  logo.src = './images/logoLogin.png';
  logo.classList.add('logo');
  logo.alt = 'logo de Guide Ma+Pa';

  const logoInWords = document.createElement('img');
  logoInWords.src = './images/logoWords.png';
  logoInWords.classList.add('logoWords');
  logoInWords.alt = 'Guide Ma+Pa';

  const description = document.createElement('h2');
  description.textContent = '"Descubre cómo criar sin morir en el intento, donde lo caótico se convierte en una aventura compartida en esta red social."';
  description.classList.add('description');

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
  inputPassword.required = true;

  const buttonStartSession = document.createElement('button');
  buttonStartSession.textContent = 'Iniciar sesión';
  buttonStartSession.classList.add('startSession');
  buttonStartSession.addEventListener('click', () => {
    startSession(inputEmail.value, inputPassword.value).catch((error) => {
      if (error.code === 'auth/user-not-found') {
        alert('El correo electronico ingresado no existe');
      } else if (error.code === 'auth/wrong-password') {
        alert('La contraseña es incorrecta');
      } else if (error.code === 'auth/invalid-email') {
        alert('Ingresa un correo');
      } else { alert('Escribe la contraseña'); }
    });
  });

  const buttonSignInGoogle = document.createElement('button');
  buttonSignInGoogle.textContent = 'Ingresar con Google';
  buttonSignInGoogle.classList.add('signInGoogle');
  const iconGoogle = document.createElement('img');
  iconGoogle.src = './images/iconoGoogle.png';
  iconGoogle.classList.add('iconGoogle');
  buttonSignInGoogle.appendChild(iconGoogle);
  buttonSignInGoogle.addEventListener('click', () => {
    signInWithGoogle();
  });

  const paragraphYouAreNotRegistered = document.createElement('p');
  paragraphYouAreNotRegistered.innerText = '¿Aún no estas registrado?';
  paragraphYouAreNotRegistered.classList.add('paragraph');

  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    navigateTo('/register');
  });

  section.append(
    title,
    inputEmail,
    inputPassword,
    buttonStartSession,
    buttonSignInGoogle,
    paragraphYouAreNotRegistered,
    buttonCreateAccount,
  );
  sectionP.append(logo, logoInWords, description, section);

  return (sectionP);
}

export default login;
