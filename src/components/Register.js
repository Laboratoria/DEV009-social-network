export const Register = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');

  buttonBack.textContent = 'Go back to Home';
  button.textContent = 'Register';
  title.textContent = 'Register';

  buttonBack.addEventListener('click', () => navigateTo('/'));
  homeDiv.append(buttonBack);
  homeDiv.append(inputEmail);
  homeDiv.append(inputPassword);

  return homeDiv;
};
