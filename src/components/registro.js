import { registerWithEmail } from '../lib/index.js';

function registro(navigateTo) {
  const section = document.createElement('section'); /*section se usa en registro y en login*/
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegistro = document.createElement('button');
  const buttonReturn = document.createElement('button');
  const errorRegister = document.createElement('h3'); 

  inputName.placeholder = 'Nombre de usuario';
  inputName.className = 'displayName'
  inputEmail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';
  buttonRegistro.textContent = 'registro';
  errorRegister.textContent = 'errorMessage';
  errorRegister.style.display = 'none';
  errorRegister.id = 'errorRegister'
  
  buttonRegistro.addEventListener('click', () => {
    const emailValue = inputEmail.value;
    const nameValue = inputName.value;
    const passwordValue = inputPass.value;
    
    const userInfo = {
      email: emailValue,
      name: nameValue,
      password: passwordValue,
    };

    registerWithEmail(userInfo.email,
      userInfo.password,
      userInfo.name,
      )
    }) 
        
    buttonReturn.textContent = 'back to home';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });
    section.append(errorRegister, inputName, inputEmail, inputPass, buttonRegistro, buttonReturn);
    return section;
  }
  
  //  navigateTo('/principal');
  


export default registro;