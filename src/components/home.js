function home(navigateTo) {
  const divHome = document.createElement('div');
  divHome.className = 'divHome';

  const logoBonHome = document.createElement('img');
  logoBonHome.className = 'logoBonHome';

  const buttonInicio = document.createElement('button');
  buttonInicio.className = 'button buttonSignInHome';
  buttonInicio.textContent = 'Inicia sesión';

  const buttonParrafo = document.createElement('h2');
  buttonParrafo.textContent = 'Y si no tienes cuenta...';

  const buttonRegistro = document.createElement('button');
  buttonRegistro.className = 'button buttonLoginHome';

  buttonInicio.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonRegistro.textContent = 'Regístrate';

  buttonRegistro.addEventListener('click', () => {
    navigateTo('/registro');
  });

  divHome.appendChild(logoBonHome);
  divHome.appendChild(buttonInicio);
  divHome.appendChild(buttonParrafo);
  divHome.appendChild(buttonRegistro);

  return divHome;
}

export default home;
