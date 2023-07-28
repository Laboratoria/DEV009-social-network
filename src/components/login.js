export const login = (navigateTo) => {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.classList.add('inicio-sesion');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('botones-inicio-sesion');
  const buttonReturn = document.createElement('button');
  const buttonLog = document.createElement('button');

  inputEmail.placeholder = 'Escribe tu Email';
  inputPass.placeholder = 'Contraseña';

  title.textContent = 'Inicio de sesion';
  buttonLog.textContent = 'Iniciar sesion';
  buttonReturn.textContent = 'Regresar';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  buttonContainer.append(buttonLog, buttonReturn);
  section.append(title, inputEmail, inputPass, buttonContainer);
  return section;
};
