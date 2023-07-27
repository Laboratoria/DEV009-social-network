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
  const btnRegistro = document.createElement('button');
  btnRegistro.textContent = 'Registro';

  form.appendChild(nameLb);
  form.appendChild(nameText);
  form.appendChild(emailLb);
  form.appendChild(emailText);
  form.appendChild(passLb);
  form.appendChild(passText);
  form.appendChild(btnRegistro);
  sectionForm.appendChild(form);

  return sectionForm;
}
