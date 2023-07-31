function home(navigateTo) {
  const main = document.createElement('main');

  const text = document.createElement('div');
  text.className = 'div-text';

  const title = document.createElement('h1');
  title.textContent = 'SpookyVerse';

  const slogan = document.createElement('p');
  slogan.textContent = '¡Donde las pesadillas se comparten!';

  const logo = document.createElement('img');
  logo.src = 'components/images/logo.png';
  logo.setAttribute('id','logo-home');

  const login = document.createElement('button');
  login.className = 'btn-login';
  login.textContent = 'Ingresar';
  login.addEventListener('click', () => {
    navigateTo('/login');
  });

  const join = document.createElement('button');
  join.className = 'btn-join';
  join.textContent = 'Crear cuenta';
  join.addEventListener('click', () => {
    navigateTo('/join');
  });

  text.append(title,slogan)
  main.append(title, slogan, logo, login, join);


  return main;
}

export default home;
