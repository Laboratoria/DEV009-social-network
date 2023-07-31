function home(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h1');
  title.textContent = 'SpookyVerse';

  const slogan = document.createElement('p');
  slogan.textContent = '¡Donde las pesadillas se comparten!';

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

  main.append(title, slogan, login, join);

  return main;
}

export default home;
