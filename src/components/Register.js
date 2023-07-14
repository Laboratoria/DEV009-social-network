import {onNavigate} from '../main.js';


export const Register = () => {
  const homeDiv = document.createElement('div');
  const title = documenr.createElement('h2');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');

  buttonBack.textContent = 'Go back to Home';
  button.textContent = 'Register'
  title.textContent = 'Register'

  buttonBack.addEventListener('click', () => onNavigate('/'));
  homeDiv.append(buttonBack);

  return HomeDiv;
};
