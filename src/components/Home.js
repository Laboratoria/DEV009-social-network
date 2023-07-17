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

