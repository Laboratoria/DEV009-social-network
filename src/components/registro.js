import { registerWithEmail } from '../lib/index.js';

function registro(navigateTo) {
  const containerRegister= document.createElement('div');
   containerRegister.className='containerRegister';
 /*const sectionLogo=document.createElement('img');
  sectionLogo.src = logo;
  sectionLogo.className='bonbonLogo';*/
  const formRegister = document.createElement('form');
  formRegister.className = 'formRegister';
  const inputName = document.createElement('input');
  inputName.className='inputName';
  const inputEmail = document.createElement('input');
  inputEmail.className='inputEmail';
  const inputPass = document.createElement('input');
  inputPass.className='inputPass'
  const buttonRegistro = document.createElement('button');
  buttonRegistro.className='buttonRegistro'
  const buttonReturn = document.createElement('button');

  inputName.placeholder = 'Nombre de usuario';
  inputEmail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';
  
  buttonRegistro.textContent = 'Registrar';
  
  buttonRegistro.addEventListener('click', () => {
    const emailValue = inputEmail.value;
    const nameValue = inputName.value;
    const passwordValue = inputPass.value;
    
    const userInfo = {
      email: emailValue,
      name: nameValue,
      password: passwordValue,
    };

    registerWithEmail(
      userInfo.email, 
      userInfo.password,
      userInfo.name,
      )
      .then ((userInfo) => {
        window.location.href = '/principal';
      })
    });
    
    buttonReturn.textContent = 'back to home';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });
    formRegister.appendChild(containerRegister);
    /*containerRegister.appendChild(sectionLogo);*/
    containerRegister.appendChild(inputName);
    containerRegister.appendChild(inputEmail);
    containerRegister.appendChild(inputPass);
    containerRegister.appendChild(buttonRegistro);
    containerRegister.appendChild(buttonReturn);
    return containerRegister;
  }
  
  //  navigateTo('/principal');
  


export default registro;