function home(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h1');
  title.textContent = 'SpookyVerse';

  const slogan = document.createElement('p');
  slogan.setAttribute('id','slogan-home');
  slogan.textContent = '¡Donde las pesadillas se comparten!';

  const logo = document.createElement('img');
  logo.src = 'components/images/logo.png';
  logo.setAttribute('id','logo-home');

  const login = document.createElement('button');
  login.className = 'btn-home';
  login.textContent = 'Iniciar Sesion';
  login.addEventListener('click', () => {
    navigateTo('/login');
  });

  const join = document.createElement('button');
  join.className = 'btn-home';
  join.textContent = 'Crear cuenta';
  join.addEventListener('click', () => {
    navigateTo('/join');
  });
  
  const logingoogle = document.createElement('button');
  logingoogle.className = 'btn-home';
  logingoogle.textContent = 'Inicia sesion con Google';
 
  main.append(title, slogan, logo, login, join,logingoogle);


  return main;
}

export default home;
