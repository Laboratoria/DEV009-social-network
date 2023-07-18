export const Home = (navigateTo) => {
  const homeDiv = document.createElement('div');

  const title = document.createElement('h2');
  title.classList.add('title');

  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Register';
  buttonLogin.textContent = 'Login';
  title.textContent = 'Expressio Music';

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  homeDiv.append(buttonRegister);
  homeDiv.append(buttonLogin);
  homeDiv.append(title);


  return homeDiv;
};
