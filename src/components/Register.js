<<<<<<< HEAD
// import {onNavigate} from '../main.js';
=======
import {onNavigate} from '../main.js';
>>>>>>> 4d6c365dab537d8501998a7c92e0af505f91ec63


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
