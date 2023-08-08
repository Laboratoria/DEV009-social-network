import { registerWithGoogle } from "../lib/index.js";
function signupGoogle(navigateTo) {

    const section = document.createElement('section');
    const logo = document.createElement('img');

    logo.src = "./img/logo.png";
    section.appendChild(logo);
    return section;

    
}

export default signupGoogle;
