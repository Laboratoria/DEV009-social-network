import { registerWithEmail } from '../lib/index.js';

function registro(navigateTo) {
  const section = document.createElement('section');
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
    .then((user)=>{
      navigateTo('/principal');
    })
    .catch ((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/network-request-failed.'){ /*Revisar codigo cuando los campos estan vacios*/
      errorRegister.style.display = 'block';
      errorRegister.textContent = 'Los campos no pueden estar vacios' 
      } else if (errorCode === 'auth/weak-password'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'La contraseña debe tener al menos 6 caracteres' 
      } else if (errorCode === 'auth/invalid-email'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Email invalido' 
      } else if (errorCode === 'auth/missing-email'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Falta colocar correo' 
      } else if (errorCode === 'auth/email-already-in-use'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'El correo electrónico ya se encuentra registrado' 
      } else if (errorCode === 'auth/internal-error'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Falta colocar contraseña' 
      } else if (displayName === 'auth/invalid-display-name'){/*Falta mandar mensaje cuando el campo de usuario se encuentra vacio*/
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Falta colocar usuario' 
      } 
      console.log(error.code);
      return error;
    });
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
