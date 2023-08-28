function home(navigateTo) {
  const divHome = document.createElement('div');
  const headerHome = document.createElement('header');
  headerHome.className = 'headerHome';

  const logoBonHome = document.createElement('img');
  logoBonHome.className = 'logoBonHome';

  const sectionHome = document.createElement('section');
  sectionHome.className = 'sectionHome';

  const buttonInicio = document.createElement('button');
  buttonInicio.className = 'button buttonSignInHome';
  buttonInicio.textContent = 'Inicia sesión';

  const buttonParrafo = document.createElement('p');
  buttonParrafo.textContent = 'Y si no tienes cuenta...';

  const buttonRegistro = document.createElement('button');
  buttonRegistro.className = 'button buttonRegistroHome';

  buttonInicio.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonRegistro.textContent = 'Regístrate';

  buttonRegistro.addEventListener('click', () => {
    navigateTo('/registro');
  });
  divHome.append(headerHome, sectionHome);
  headerHome.appendChild(logoBonHome);
  sectionHome.append(buttonInicio, buttonParrafo, buttonRegistro);

  return divHome;
}

export default home;
