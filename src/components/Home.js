<<<<<<< HEAD
// import { onNavigate } from "../main.js";

export const Home = () => {

    const HomeDiv = document.createElement('div');

    const buttonRegister = document.createElement('button');

    const buttonLogin = document.createElement('button'); 
    
    buttonRegister.textContent = 'Registrate';

    buttonLogin.textContent = 'Login'; 
    
/*    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    buttonLogin.addEventListener('click', () => onNavigate('/Login'));  */
    
    
    HomeDiv.appendChild(buttonRegister);

    HomeDiv.appendChild(buttonLogin); 
    
    return HomeDiv;
};
=======
import {onNavigate} from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Login';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/Login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
>>>>>>> 205c3a7de88b1ca0eb9167a91721f32f9944e6cf
