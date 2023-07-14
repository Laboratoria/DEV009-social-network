import {onNavigate} from '../main.js';


export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Welcome';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Go back to Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
