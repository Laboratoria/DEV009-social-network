export const Register = (navigateTo) => {
  const homeDiv = document.createElement('div');

  const title = document.createElement('h3');

  const inputEmail = document.createElement('input');
  inputEmail.id = 'enterEmail';
  const note = document.createElement('p');
  note.innerHTML= 'Enter your email address';
  //   inputEmail.addEventListener('inputEmail', () => {
  //     note.innerHTML = 'Enter an existing email address';
  //   });

  const inputPassword = document.createElement('input');
  inputPassword.id = 'enterPassword';
  const password = document.createElement('p');
  password.innerHTML= 'Enter your password';
  //   inputPassword.addEventListener('inputPassword', () => {
  //     password.innerHTML = 'Incorrect password';
  //   });

  const button = document.createElement('button');

  const buttonBack = document.createElement('button');

  const buttonGoogle = document.createElement('button');

  title.textContent = 'Sign Up';
  buttonBack.textContent = 'Go back';
  button.textContent = 'Sign Up';
  buttonGoogle.textContent = 'Continue with Google';
  inputEmail.placeholder = 'Email address';
  inputPassword.placeholder = 'Password';

  buttonBack.addEventListener('click', () => {
    navigateTo('/');
  });

  button.addEventListener('click', () => {
    navigateTo('/start');
  });

  homeDiv.append(title);
  homeDiv.append(note);
  homeDiv.append(inputEmail);
  homeDiv.append(password);
  homeDiv.append(inputPassword);
  homeDiv.append(button);
  homeDiv.append(buttonGoogle);
  homeDiv.append(buttonBack);

  return homeDiv;
};

// const usuario = document.getElementById("name").value;
//   document.getElementById("saludo").innerHTML = "Hola "+ usuario;
