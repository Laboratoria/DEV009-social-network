import { auth } from '../lib/firebase.js';

export const register2 = (navigateTo) => {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Registrate!';

  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.setAttribute('placeholder', 'Email');

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.setAttribute('placeholder', 'Password');

  const confirmPassMessage = document.createElement('p');
  confirmPassMessage.textContent = 'Confirma tu contraseña';

  const confirmedPasswordInput = document.createElement('input');
  confirmedPasswordInput.type = 'password';
  confirmedPasswordInput.setAttribute('placeholder', 'Password');

  const backButton = document.createElement('button');
  backButton.textContent = 'Regresr';
  backButton.addEventListener('click', () => {
    navigateTo('/register');
  });

  const regsiterButton = document.createElement('button');
  regsiterButton.textContent = 'Enviar';
  regsiterButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      const userId = user.uid;

      // eslint-disable-next-line no-console
      console.log('Registro exitoso, bienvenida a SisterSphere!!!');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error al registrar al usuario:', error.message);
    }
  });

  /* eslint-disable-next-line no-alert
    alert('Bienvenida a SisterSphere!');
  }); */

  section.append(
    title,
    emailInput,
    passwordInput,
    confirmPassMessage,
    confirmedPasswordInput,
    regsiterButton,
    backButton,
  );

  return section;
};
