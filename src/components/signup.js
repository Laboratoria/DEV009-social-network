import { registerUser, registerWithGoogle } from "../lib/index.js";
import { auth, provider } from "../firebase/initializeFirebase.js";

function signup(navigateTo){

const section = document.createElement('section');
const logo = document.createElement('img');
const title = document.createElement('h2');

const name = document.createElement('input');
const formRegister = document.createElement('form');
const email = document.createElement('input');
const password = document.createElement('input');
const btnSignup = document.createElement('button');
const toLogin = document.createElement('p');
const or = document.createElement('p');
const signupWithGmail =  document.createElement('a');
const linkGmail =  document.createElement('img');

section.classList.add("conteinerSignup");
logo.classList.add("logo");
title.classList.add("title");
name.classList.add("name");
formRegister.classList.add("formRegister");


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
signupWithGmail.textContent = "Registrarse con";
linkGmail.src = "./icons/gmail.svg";
linkGmail.width = 24;
linkGmail.height = 24;

formRegister.addEventListener('submit',(e)=>{
    e.preventDefault();
    const emailUser = email.value;
    const passUser= password.value;
    const alerRegister = (boolean)=>{
        if(boolean){
            navigateTo('/wall');
        }
    }
    registerUser(emailUser, passUser, alerRegister);
})
toLogin.addEventListener('click', ()=>{
    navigateTo("/");
} )

linkGmail.addEventListener('click', (e)=>{
    e.preventDefault();
    
    const alerRegisterGoogle = (boolean)=>{
        if(boolean){
            navigateTo('/wall');
        }
    }
    registerWithGoogle(alerRegisterGoogle);
})

section.append(logo, title, name, formRegister, toLogin, or, signupWithGmail, linkGmail);
formRegister.append(email, password, btnSignup);
return section;
}

export default signup;

