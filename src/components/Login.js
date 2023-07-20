import { signinUser } from '../lib/account';

export const Login = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const inputEmail = document.createElement('input');
  inputEmail.id = 'enterEmail';
  const note = document.createElement('p');
  note.innerHTML = 'Enter your email address';
  const inputPassword = document.createElement('input');
  inputPassword.id = 'enterPassword';
  const password = document.createElement('p');
  password.innerHTML = 'Enter your password';
  const button = document.createElement('button');

  button.addEventListener('click', () => {
    signinUser(inputEmail.value, inputPassword.value)

      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        alert('Se logró', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  const buttonBack = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  button.textContent = 'Sign In';
  buttonBack.textContent = 'Go back';
  buttonGoogle.textContent = 'Continue with Google';
  title.textContent = 'Sign In';
  inputEmail.placeholder = 'Email address';
  inputPassword.placeholder = 'Password';

  buttonBack.addEventListener('click', () => {
    navigateTo('/');
  });
  button.addEventListener('click', () => {
    navigateTo('/start');
  });

  homeDiv.append(title, note, inputEmail, password, inputPassword, button, buttonGoogle);
  homeDiv.append(buttonBack);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  buttonContainer.append(button);
  buttonContainer.append(buttonGoogle);
  buttonContainer.append(buttonBack);

  homeDiv.append(buttonContainer);

  return homeDiv;
};

// const usuario = document.getElementById("name").value;
//   document.getElementById("saludo").innerHTML = "Hola "+ usuario;
