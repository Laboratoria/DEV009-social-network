import { conexionUser } from '../controller/registroController';

export function registroView() {
  const logoContent = document.createElement('section');
  logoContent.classList.add('logo-content');
  const logo = document.createElement('img');
  logo.classList.add('img-logo');
  logo.src = 'img/logo-principal.png';
  logo.alt = 'logo FandomFlix';
  logoContent.appendChild(logo);

  const sectionForm = document.createElement('section');
  sectionForm.classList.add('content-form');
  const formRegistro = document.createElement('form');
  formRegistro.setAttribute('id', 'formRegistro');
  const title = document.createElement('p');
  title.innerHTML = 'Signup <i class="fa-solid fa-right-to-bracket"></i>';
  const nameLb = document.createElement('label');
  nameLb.textContent = 'Nombre de usuario:';
  const nameText = document.createElement('input');
  nameText.setAttribute('type', 'text');
  nameText.setAttribute('id', 'name-text');
  const emailLb = document.createElement('label');
  emailLb.textContent = 'Correo Electronico';
  const emailText = document.createElement('input');
  emailText.setAttribute('type', 'text');
  emailText.setAttribute('id', 'email-text');
  const passLb = document.createElement('label');
  passLb.textContent = 'Contraseña';
  const passText = document.createElement('input');
  passText.setAttribute('type', 'password');
  passText.setAttribute('id', 'pass-text');
  const confirmarpassLb = document.createElement('label');
  confirmarpassLb.textContent = 'ConfirmarContraseña';
  const confirmarpassText = document.createElement('input');
  confirmarpassText.setAttribute('type', 'password');
  const btnRegistro = document.createElement('button');
  btnRegistro.setAttribute('type', 'submit');
  btnRegistro.setAttribute('id', 'btnRegistro');
  btnRegistro.textContent = 'Registro';
  const validaciones = document.createElement('div');
  validaciones.setAttribute('id', 'validaciones');
  const passRepit = document.createElement('p');
  passRepit.textContent = 'Las contraseñas no coinciden';
  const emailRegistre = document.createElement('p');
  emailRegistre.textContent = 'El correo electronico ya se encuentra registrado';
  const caracteres = document.createElement('p');
  caracteres.textContent = 'La contraseña debe tener almenos 6 caracteres';
  const error = document.createElement('p');
  error.textContent = 'Correo o contraseña invalidos';
  formRegistro.appendChild(validaciones);

  formRegistro.appendChild(title);
  formRegistro.appendChild(nameLb);
  formRegistro.appendChild(nameText);
  formRegistro.appendChild(emailLb);
  formRegistro.appendChild(emailText);
  formRegistro.appendChild(passLb);
  formRegistro.appendChild(passText);
  formRegistro.appendChild(confirmarpassLb);
  formRegistro.appendChild(confirmarpassText);
  formRegistro.appendChild(btnRegistro);
  sectionForm.appendChild(formRegistro);

  const container = document.createElement('main');
  container.classList.add('container');
  container.appendChild(logoContent);
  container.appendChild(sectionForm);

  formRegistro.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nameValue = nameText.value;
    const emailValue = emailText.value;
    const passValue = passText.value;
    const confirmarPassValue = confirmarpassText.value;

    if (passValue === confirmarPassValue) {
      conexionUser(nameValue, emailValue, passValue);
    } else {
      passRepit.textContent = 'Las contraseñas no coinciden';
    }
  });

  return container;
}
