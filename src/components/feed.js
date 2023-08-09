import { async } from 'regenerator-runtime';
import { logoutUser } from '../lib';
import { addRecipe } from '../lib/DataBase';

function feed(navigateTo) {
  const section = document.createElement('section');
  const nav = document.createElement('nav');
  const select = document.createElement('select');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const write = document.createElement('button');
  const logo = document.createElement('img');
  const logoutButtom = document.createElement('button');
  const logoutMessage = document.createElement('p');
  const logoutMessageError = document.createElement('p');
  const recipe = document.createElement ('textarea');
  const formRecipe = document.createElement ('form');
  const nameSteps = document.createElement('input');
  const add = document.createElement('button');

  logo.src = './imagenes/image.png';
  write.textContent = 'Añade una Receta';
  option1.value = 'Mejores Recetas';
  option1.textContent = 'Mejores Recetas';
  option2.value = 'Usuarios';
  option2.textContent = 'Usuarios';
  recipe.placeholder= 'ingresa tu receta';
  formRecipe.style.display = 'none'
  nameSteps.type = 'text';
  nameSteps.placeholder = 'Nombre de la receta';
  add.textContent = 'Agregar';
  logoutButtom.textContent = 'Cerrar Sesión';
  logoutMessage.style.color = 'green';
  logoutMessageError.style.color = 'red';
  logoutButtom.addEventListener('click', () => {
    logoutUser();
    navigateTo('/');
  });
  
  write.addEventListener('click', () => {
    formRecipe.style.display = 'block'
  })

  add.addEventListener('click', async (event) =>{
  event.preventDefault();
  const data = recipe.value;
  const stepsRecipe = nameSteps.value;
  console.log(data)
  if (!stepsRecipe || !data){
    console.log('Por favor, completa ambos campos.');
    return;
  }

  await addRecipe(stepsRecipe, data);
  console.log('Receta agregada exitosamente.');
});

  section.append(logo, formRecipe, write, nav, logoutButtom,);
  formRecipe.append(nameSteps, recipe, add)
  nav.append(select);
  select.append(option1, option2);
  return section;
}
export default feed;
