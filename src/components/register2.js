export const register2 = (navigateTo) => {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Registrate!';

  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.setAttribute('placeholder', 'Email');

  const passwordInput = document.createElement('input');
  passwordInput.type = 'text';
  passwordInput.setAttribute('placeholder', 'Password');

  const confirmPassMessage = document.createElement('p');
  confirmPassMessage.textContent = 'Confirma tu contraseña';

  const confirmedPasswordInput = document.createElement('input');
  confirmedPasswordInput.type = 'text';
  confirmedPasswordInput.setAttribute('placeholder', 'Password');

  const backButton = document.createElement('button');
  backButton.textContent = 'Regresr';
  backButton.addEventListener('click', () => {
    navigateTo('/register');
  });

  const regsiterButton = document.createElement('button');
  regsiterButton.textContent = 'Enviar';
  regsiterButton.addEventListener('click', () => {
    // eslint-disable-next-line no-alert
    alert('Bienvenida a SisterSphere!');
  });

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
