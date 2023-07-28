import { conexionUser } from '../controller/registroController';

export function registroView() {
  const sectionForm = document.createElement('section');
  sectionForm.classList.add('content-form');
  const form = document.createElement('form');
  const nameLb = document.createElement('label');
  nameLb.textContent = 'Nombre de usuario:';
  const nameText = document.createElement('input');
  nameText.setAttribute('type', 'text');
  const emailLb = document.createElement('label');
  emailLb.textContent = 'Correo Electronico';
  const emailText = document.createElement('input');
  emailText.setAttribute('type', 'text');
  const passLb = document.createElement('label');
  passLb.textContent = 'Contraseña';
  const passText = document.createElement('input');
  passText.setAttribute('type', 'text');
  const confirmarpassLb = document.createElement('label');
  confirmarpassLb.textContent = 'Contraseña';
  const confirmarpassText = document.createElement('input');
  confirmarpassText.setAttribute('type', 'text');
  const btnRegistro = document.createElement('button');
  btnRegistro.setAttribute('type', 'submit');
  btnRegistro.id('btn-registro');
  btnRegistro.textContent = 'Registro';

  form.appendChild(nameLb);
  form.appendChild(nameText);
  form.appendChild(emailLb);
  form.appendChild(emailText);
  form.appendChild(passLb);
  form.appendChild(passText);
  form.appendChild(confirmarpassLb);
  form.appendChild(confirmarpassText);
  form.appendChild(btnRegistro);
  sectionForm.appendChild(form);

  return sectionForm;
}
const btnRegistro = document.getElementById('btnRegistro');
btnRegistro.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameText = event.target.value;
  const passText = event.target.value;
  const emailText = event.target.value;
  const confirmarpassText = event.target.value;

  if (passText === confirmarpassText) {
    conexionUser(nameText, emailText, passText);
  } else {
    document.getElementById('error').style.display = 'block';
  }
});
