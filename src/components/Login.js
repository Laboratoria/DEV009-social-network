import {onNavigate} from '../main.js';

export const Login = () => {
  const homeDiv = document.createElement('div');
  const title = documenr.createElement('h2');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');

  button.textContent = 'Login'
  buttonBack.textContent = 'Go back';
  title.textContent = 'Login'


  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  homeDiv.append(buttonHome);
  homeDiv.append(inputEmail);
  homeDiv.append(inputPassword);

  return homeDiv;
};
