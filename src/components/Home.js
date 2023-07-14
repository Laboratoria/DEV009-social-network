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