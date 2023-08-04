function home(navigateTo) {

  const contenedorGeneral = document.createElement('div');
  contenedorGeneral.className = 'contenedor';

  const buttonInicio = document.createElement('button');
  buttonInicio.className = 'boton_Inicio';

  const buttonParrafo = document.createElement('h2');
  buttonParrafo.textContent = 'Y si no tienes cuenta...';

  const buttonRegistro = document.createElement('button');
  buttonRegistro.className = 'boton_Registro';

  buttonInicio.textContent = 'Inicia sesión';
  buttonInicio.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonRegistro.textContent = 'Regístrate';

  buttonRegistro.addEventListener('click', () => {
    navigateTo('/registro');
  });

  contenedorGeneral.appendChild(buttonInicio);
  contenedorGeneral.appendChild(buttonParrafo);
  contenedorGeneral.appendChild(buttonRegistro);

  return contenedorGeneral;
}

export default home;
