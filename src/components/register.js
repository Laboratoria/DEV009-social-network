export const register = (navigateTo) => {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Registrate!';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.setAttribute('placeholder', 'First Name');

  const lastNameInput = document.createElement('input');
  lastNameInput.type = 'text';
  lastNameInput.setAttribute('placeholder', 'Last Name');

  const ageInput = document.createElement('input');
  ageInput.type = 'date';

  const selection = document.createElement('select');

  const genderOption1 = document.createElement('option');
  genderOption1.setAttribute('value', 'femenino');
  genderOption1.textContent = 'femenino';

  const genderOption2 = document.createElement('option');
  genderOption2.setAttribute('value', 'masculino');
  genderOption2.textContent = 'masculino';

  const nextRegisterButton = document.createElement('button');
  nextRegisterButton.textContent = 'Siguiente';
  nextRegisterButton.addEventListener('click', () => {
    navigateTo('/register2');
  });

  selection.append(genderOption1, genderOption2);

  section.append(title, nameInput, lastNameInput, ageInput, selection, nextRegisterButton);
  return section;
};
