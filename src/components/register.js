import { createUser, signInWithGoogle } from '../lib';
import logoCocinarte from '../imagenes/logoCocinarte.png';
import avatar from '../imagenes/avatar.png'


function register(navigateTo) {
  const section = document.createElement('section');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const password = document.createElement('input');
  const name = document.createElement('input');
  const email = document.createElement('input');
  const logo = document.createElement('img');
  const avatarImg = document.createElement('img');
  const errorMessage = document.createElement('p');
  const successMessage = document.createElement('p');
  logo.src = logoCocinarte;
  avatarImg.src = avatar;
  avatarImg.classList.add('avatarImg');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.className = 'button-register';
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.className = 'button-google';
  password.placeholder = 'Crea tu Contraseña';
  password.className = 'input-password';
  password.type = 'password';
  name.placeholder = 'Ingresa tu nombre';
  email.className = 'input-email';
  email.placeholder = 'Ingresa tu Email';
  errorMessage.style.color = 'grey';
  errorMessage.className = 'error-mesagge';
  successMessage.style.color = 'green';

  buttonRegister.addEventListener('click', async () => {
    const userEmail = email.value;
    const userPassword = password.value;
    if (userEmail && userPassword) {
      try {
        await createUser(userEmail, userPassword);
        successMessage.textContent = 'Usuario registrado con éxito';
        errorMessage.textContent = '';
        navigateTo('/feed');
      } catch (error) {
        errorMessage.textContent = error.message;
        successMessage.textContent = '';
      }
    } else {
      errorMessage.textContent = 'Por favor, ingresa un correo y una contraseña válida.';
    }
  });

  buttonGoogle.addEventListener('click', async () => {
    try {
      await signInWithGoogle();
      navigateTo('/feed');
    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });
  section.append(logo, avatarImg, name, email, password, buttonRegister);
  section.append(buttonGoogle, errorMessage, successMessage);
  return section;
}
export default register;
