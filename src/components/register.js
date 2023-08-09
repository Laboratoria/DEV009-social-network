import { createUser, signInWithGoogle } from '../lib';

function register(navigateTo) {
  const section = document.createElement('section');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const password = document.createElement('input');
  const name = document.createElement('input');
  const email = document.createElement('input');
  const logo = document.createElement('img');
  const avatar = document.createElement('img');
  const errorMessage = document.createElement('p');
  const successMessage = document.createElement('p');
  logo.src = './imagenes/image.png';
  avatar.src = './imagenes/avatar.png';
  avatar.classList.add('avatar');
  buttonRegister.textContent = 'Registrate';
  buttonGoogle.textContent = 'Continuar con Google';
  password.placeholder = 'Crea tu Contraseña';
  name.placeholder = 'Ingresa tu nombre';
  email.placeholder = 'Ingresa tu Email';
  errorMessage.style.color = 'grey';
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

  password.addEventListener('input', () => {
    password.type = 'password';
  });
  buttonGoogle.addEventListener('click', async () => {
    try {
      await signInWithGoogle();
      navigateTo('/feed');
    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });
  section.append(logo, avatar, name, email, password, buttonRegister);
  section.append(buttonGoogle, errorMessage, successMessage);

  return section;
}
export default register;
