function home (navigateTo){
  const containerTotal = document.createElement ('div');
  containerTotal.className='contenedor';       
  const containerSecund =document.createElement ('div');
  containerSecund.className='contenedor2 '
  const buttonInicio = document.createElement('button');
  buttonInicio.className = 'boton_Inicio';
  const title = document.createElement('h4');
  title.textContent= 'Y si no tienes cuenta ...'   
  const buttonRegistro =document.createElement('button');
  buttonRegistro.className = 'boton_Registro';
    
  buttonInicio.textContent = 'Inicia sesión'
  buttonInicio.addEventListener('click', () => {
    navigateTo('/login');
  });   
    
  buttonRegistro.textContent = 'Regístrate'
  buttonRegistro.addEventListener('click', () => {
    navigateTo('/registro');
  });

  containerTotal.appendChild(buttonInicio);
  containerTotal.appendChild(containerSecund);
  containerSecund.appendChild(buttonRegistro);
  containerSecund.appendChild(title);
 
   return containerTotal;
}

export default home;