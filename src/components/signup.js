import { registerUser } from "../lib/index.js";
function signup(navigateTo){

const section = document.createElement('section');
const logo = document.createElement('img');
const title = document.createElement('h2');
title.textContent = "Registrate";

//const name = document.createElement('input');
const formRegister = document.createElement('form');
const email = document.createElement('input');
const password = document.createElement('input');
//const validatePassword = document.createElement('input');
const btnSignup = document.createElement('button');
const toLogin = document.createElement('p');
const or = document.createElement('p');
const signupWithGmail =  document.createElement('a');
const linkGmail =  document.createElement('img');

logo.src = "./img/logo.png";
//name.placeholder = "Nombre";
email.placeholder = "ejemplo@correo.com";
password.placeholder = "Contraseña";
//validatePassword.placeholder = "Confirmar contraseña";

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
    registerUser(emailUser, passUser);
    navigateTo("/wall");
})
toLogin.addEventListener('click', ()=>{
    navigateTo("/");
} )

section.append(logo, title, formRegister, toLogin, or, signupWithGmail, linkGmail);
formRegister.append(email, password, btnSignup);
return section;
}

export default signup;

