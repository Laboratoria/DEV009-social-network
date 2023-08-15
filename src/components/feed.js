import { logoutUser } from '../lib';
import { addRecipe, fetchRecipe, querySnapshot } from '../lib/dataBase';

function feed(navigateTo) {
  const section = document.createElement('section');
  const nav = document.createElement('nav');
  const select = document.createElement('select');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const write = document.createElement('button');
  const logo = document.createElement('img');
  const logoutButtom = document.createElement('button');
  const MessageOk = document.createElement('p');
  const MessageError = document.createElement('p');
  const recipe = document.createElement ('textarea');
  const formRecipe = document.createElement ('form');
  const nameSteps = document.createElement('input');
  const add = document.createElement('button');
  const showPostFeed = document.createElement('div');

  logo.src = './imagenes/image.png';
  write.textContent = 'Añade una Receta';
  option1.value = 'Mejores Recetas';
  option1.textContent = 'Mejores Recetas';
  option2.value = 'Usuarios';
  option2.textContent = 'Usuarios';
  recipe.placeholder = 'ingresa tu receta';
  formRecipe.style.display = 'none'
  nameSteps.type = 'text';
  nameSteps.placeholder = 'Nombre de la receta';
  add.textContent = 'Agregar';
  logoutButtom.textContent = 'Cerrar Sesión';
  MessageOk.style.color = 'green';
  MessageError.style.color = 'grey';


  logoutButtom.addEventListener('click', () => {
    logoutUser();
    navigateTo('/');
  });
  
  write.addEventListener('click', () => {
    formRecipe.style.display = 'block'
    write.style.display = 'none';
  })


  add.addEventListener('click', async (event) =>{
  event.preventDefault();
  const recipeData = recipe.value;
  const nameRecipe = nameSteps.value;

  if (!nameRecipe || !recipeData){
    MessageError.textContent = 'Por favor, completa ambos campos.';
    console.log('Por favor, completa ambos campos.');
    return;
  } else{
    const newRecipeId = await addRecipe(nameRecipe, recipeData);
    if (newRecipeId){
      const recipeContent = await fetchRecipe(newRecipeId);
      if (recipeContent){
        console.log('Receta obtenida:', recipeContent);
        MessageOk.textContent = 'Receta agregada exitosamente. ID: ' + recipeContent;
        MessageError.textContent = '';

        
  function showPost (){
    showPostFeed.innerHTML = '';
    querySnapshot.forEach((doc) => {
    const postRecipe = `<button class= "postRecipe">
    <h3 class= "user">Usuario:</h3></h3>
    <p  class="name">Receta: ${recipeContent.name} 
    <p class="steps">Pasos: ${recipeContent.Pasos}</p>
    </button>`;
    showPostFeed.innerHTML += postRecipe;
    });
  }
  formRecipe.style.display = 'none';
        return showPost();
    } else {
      MessageError.textContent = 'Error al obtener la receta.';
      MessageOk = '';
    }
    } else {
      MessageError.textContent = 'Error al agregar la receta.';
      console.log('Error al agregar la receta.');
    }
  }
});

  section.append(logo, formRecipe, write, nav, logoutButtom,);
  formRecipe.append(nameSteps, recipe, add, MessageError, MessageOk)
  nav.append(select);
  select.append(option1, option2);
  return section;
}

export default feed;
