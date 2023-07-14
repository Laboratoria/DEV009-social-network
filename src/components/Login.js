import {onNavigate} from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Login';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Go back to Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
