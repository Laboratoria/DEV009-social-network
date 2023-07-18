export const Home = (navigateTo) => {
  const homeDiv = document.createElement('div');

  const title = document.createElement('h2');
  title.classList.add('title');

  const welcome = document.createElement('p');
  welcome.innerHTML= 'Welcome';

  const greeting = document.createElement('p');
  greeting.innerHTML= 'Stay connected with musicians, events, posts and more.';

  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Sign Up';
  buttonLogin.textContent = 'Sing In';
  title.textContent = 'Expressio Music';

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  homeDiv.append(title);
  homeDiv.append(welcome);
  homeDiv.append(greeting);
  homeDiv.append(buttonRegister);
  homeDiv.append(buttonLogin);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  buttonContainer.append(buttonRegister);
  buttonContainer.append(buttonLogin);

  homeDiv.append(buttonContainer);


  return homeDiv;
};
