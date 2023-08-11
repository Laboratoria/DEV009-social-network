import { registerUser, registerWithGoogle } from "../lib/index.js";
import { auth, provider } from "../firebase/initializeFirebase.js";

function signup(navigateTo){

const section = document.createElement('section');
const logo = document.createElement('img');
const title = document.createElement('h2');

const body = document.querySelector('body');
const tagFirst = body.firstChild;

const name = document.createElement('input');
const formRegister = document.createElement('form');
const email = document.createElement('input');
const password = document.createElement('input');
const btnSignup = document.createElement('button');
const toLogin = document.createElement('p');
const or = document.createElement('p');
const signupWithGmail =  document.createElement('button');
const linkGmail =  document.createElement('img');

section.classList.add("containerSignup");
logo.classList.add("logo");
title.classList.add("title");
name.classList.add("info", "name");
formRegister.classList.add("formRegister");
email.classList.add("info", "email");
password.classList.add("info", "password");
btnSignup.classList.add("btn","btnSignup");
toLogin.classList.add("toLogin");
or.classList.add("or");
signupWithGmail.classList.add("btn","signupWithGmail");
linkGmail.classList.add("linkGmail")

logo.src = "./img/logo.png";
title.textContent = "Regístrate";
name.placeholder = "Nombre";
email.placeholder = "ejemplo@correo.com";
password.placeholder = "Contraseña";
password.type= "password";
password.setAttribute('required', '');
password.setAttribute('pattern', '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}');
password.setAttribute('title', 'debe contener 8 o más caracteres que sean al menos un número y una letra mayúscula y minúscula');

btnSignup.textContent = "Registrarse";
toLogin.textContent = "Ya tengo una cuenta";
or.textContent = "ó";
signupWithGmail.textContent = "Registrarse con  ";
linkGmail.src = "./icons/gmail.svg";
//linkGmail.width = 20;
//linkGmail.height = 20;

formRegister.addEventListener('submit',(e)=>{
    e.preventDefault();
    const emailUser = email.value;
    const passUser= password.value;
    const alertRegister = (boolean)=>{
        if(boolean){
            navigateTo('/wall');
        }
    }
    registerUser(emailUser, passUser, alertRegister);
})
toLogin.addEventListener('click', ()=>{
    navigateTo("/");
} )

signupWithGmail.addEventListener('click', (e)=>{
    e.preventDefault();
    
    const alertRegisterGoogle = (boolean)=>{
        if(boolean){
            navigateTo('/wall');
        }
    }
    registerWithGoogle(alertRegisterGoogle);
})

body.insertBefore(section, tagFirst);
section.append(logo, title, name, formRegister, toLogin, or, signupWithGmail);
formRegister.append(email, password, btnSignup);
signupWithGmail.appendChild(linkGmail);
return section;
}

export default signup;

