<<<<<<< HEAD
// import { onNavigate } from "../main.js"; 
export const Login = () => {

    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Login';
    
    const buttonHome = document.createElement('button'); 
    buttonHome.textContent = 'Go back to Home'; 
    buttonHome.addEventListener('click', () => onNavigate('/')); 
    HomeDiv.appendChild(buttonHome); 
    return HomeDiv;
};
=======
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
>>>>>>> 205c3a7de88b1ca0eb9167a91721f32f9944e6cf
