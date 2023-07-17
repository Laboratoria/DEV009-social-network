<<<<<<< HEAD
import { onNavigate } from '../main.js';
// la linea 1 hace que no se renderize el programa
export const Home = () => {
    const HomeDiv = document.createElement('div');
    const title = document.createElement('h1')
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');
    buttonRegister.textContent = 'Sign Up';
    buttonLogin.textContent = 'Log In';
    title.textContent = 'Expressio Music';
    HomeDiv.appendChild(title);
    HomeDiv.appendChild(buttonRegister);
    HomeDiv.appendChild(buttonLogin);
    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    buttonLogin.addEventListener('click', () => onNavigate('/login'));
    return HomeDiv;

};

=======
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
>>>>>>> 4d6c365dab537d8501998a7c92e0af505f91ec63
