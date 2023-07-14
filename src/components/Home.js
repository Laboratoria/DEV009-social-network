import {onNavigate} from '../main.js';

export const Home = () => {
  const homeDiv = document.createElement('div');
  const title = documenr.createElement('h2');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Register';
  buttonLogin.textContent = 'Login';
  title.textContent = 'Expressio Music'

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  buttonLogin.addEventListener('click', () => {
     onNavigate('/Login');
  });

  homeDiv.append(buttonRegister);
  homeDiv.append(buttonLogin);
  homeDiv.append(title);


  return homeDiv;
};
