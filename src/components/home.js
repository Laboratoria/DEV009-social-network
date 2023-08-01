function home(navigateTo) {
  const section = document.createElement('section');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const title = document.createElement('h2');
  const message = document.createElement('p');
  const square = document.createElement('div');
  const containerButton = document.createElement('div');
  const button = document.createElement('button');
  const buttonRegister = document.createElement('button');

  title.textContent = 'Travel with Your Pet';
  message.textContent = 'With just one click you\'ll have all the information you need';
  button.textContent = 'Login';
  buttonRegister.textContent = 'Sign Up';

  section.classList.add('first-view');
  containerButton.classList.add('container-button');
  buttonRegister.classList.add('button');
  button.classList.add('button-second-style');
  square.classList.add('square');
  title.classList.add('title');
  message.classList.add('message');
  header.classList.add('logo');

  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  logo.setAttribute('src', './img/logo.png');
  logo.classList.add('logo');

  header.appendChild(logo);
  containerButton.append(button, buttonRegister);
  section.append(header, title, message, square, containerButton);
  return section;
}

export default home;
