function logIn(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonReturn = document.createElement('button');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLog = document.createElement('button');
  
    inputEmail.placeholder = 'Escribe tu Email';
    inputPass.placeholder = 'Contraseña';
  
    title.textContent = 'Inicio de sesion';
    buttonLog.textContent = 'Iniciar sesion';
    buttonReturn.textContent = 'Regresar';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });
    section.append(title, inputEmail, inputPass, buttonLog, buttonReturn);
    return section;
  }
  
  export default logIn;
  