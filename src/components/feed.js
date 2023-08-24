import { logoutUser } from '../lib/index.js';
import { addRecipe, querySnapshot, deletePost, editTextPost, likePost } from '../lib/dataBase';

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
  const formRecipe = document.createElement('form');
  const nameRecipeForm = document.createElement('input');
  const recipe = document.createElement('textarea');
  const add = document.createElement('button');
  const showPostFeed = document.createElement('div');


  logo.src = './imagenes/image.png';
  logo.className = 'logo';
  write.textContent = 'Añade una Receta';
  write.className = 'formOpen';
  option1.value = 'Mejores Recetas';
  option1.textContent = 'Mejores Recetas';
  option2.value = 'Usuarios';
  option2.textContent = 'Usuarios';
  recipe.placeholder = 'ingresa tu receta';
  recipe.className ='recipe';
  formRecipe.style.display = 'none'
  formRecipe.className ='formAddRecipe';
  nameRecipeForm.type = 'text';
  nameRecipeForm.className = 'nameRecipe';
  nameRecipeForm.placeholder = 'Nombre de la receta';
  add.textContent = 'Agregar';
  add.className = 'formButton';
  logoutButtom.textContent = 'Cerrar Sesión 💨';
  logoutButtom.className = 'logout';
  MessageOk.style.color = 'green';
  MessageError.style.color = 'grey';


  querySnapshot()
    .then((doc) => {
      showAllRecipes(doc);
    })
    .catch((error) => {
      console.error('Error al obtener posts', error);
    });


  function showAllRecipes(allRecipes) {
    showPostFeed.innerHTML = '';
    console.log(allRecipes);
    allRecipes.forEach((recipeContent) => {
      const postRecipe = `
      <div class="postShowCont">
       <h5 class="user"><img class="perfile" src="./imagenes/Profil.png" /> ${recipeContent.user.split('@')[0]}</h5>
        <div class="postRecipe" id="post-${recipeContent.id}">
        <div class="textRecipe"> 
        <p class="name">"${recipeContent.name}"</p>
          <p>Pasos:</p>
          <textarea  type="text" id="edit-${recipeContent.id}" class="steps" disabled>${recipeContent.steps}</textarea>
          <p>${recipeContent.likes}</p>
          </div> 
          <div class= "icons">
          <button id="like-${recipeContent.id}">⭐</button>
          <button class="edit" id="b-edit-${recipeContent.id}">🖋️</button>
          <button class="delete" id="delete-${recipeContent.id}"  >🗑️</button>
          </div>
          </div>
         </div>
        </div>`;
      showPostFeed.innerHTML += postRecipe;
    });
  }
  logoutButtom.addEventListener('click', () => {
    logoutUser();
    navigateTo('/');
  });

  write.addEventListener('click', () => {
    formRecipe.style.display = 'block'
    write.style.display = 'none';
    recipe.value = '';
    nameRecipeForm.value = '';
  });

  add.addEventListener('click', async (event) => {
    event.preventDefault();
    const recipeData = recipe.value;
    const nameRecipe = nameRecipeForm.value;
    formRecipe.style.display = 'none';
    write.style.display = 'block';
    if (!nameRecipe|| !recipeData) {
      MessageError.textContent = 'Por favor, completa ambos campos.';
      formRecipe.style.display = 'block';
      write.style.display = 'none';
      return;
    } else {
      formRecipe.style.display = 'none';
      MessageError.textContent = '';
      const newRecipeId = await addRecipe(nameRecipe, recipeData);
      if (newRecipeId) {
        querySnapshot()
          .then((doc) => {
            showAllRecipes(doc);
          })
          .catch((error) => {
            console.error('Error al obtener posts', error);
          });

      } else {
        MessageError.textContent = 'Error al agregar la receta.';
        console.log('Error al agregar la receta.');
      }
    }
  });



  function postEdit() {
    addEventListener.editPost('click', () => {
      console.log("editando post ")
    });
  }

  const modal = document.createElement('div');
  modal.className = 'modal';
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  const message = document.createElement('p');
  message.textContent = '¿Estás seguro que deseas eliminar tu receta?';

  const deleteButton = document.createElement('button');
  deleteButton.id = 'deleteButton';
  deleteButton.textContent = 'Eliminar';

  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancelButton';
  cancelButton.textContent = 'Cancelar';

  modalContent.append(message, deleteButton, cancelButton);
  modal.appendChild(modalContent);

  section.addEventListener('click', async (event) => {
    const key = (event.target.id);
    if (key.includes('delete-')) {
      modal.style.display = 'block';
      function awaitModal() {
        modalContent.addEventListener('click', (event) => {
          const targetId = event.target.id;
          if (targetId.includes('deleteButton')) {
            deletePost(key.replace('delete-', ''))
              .then((data) => {
                querySnapshot()
                  .then((doc) => {
                    showAllRecipes(doc);
                  })
                  .catch((error) => {
                    console.error('Error al obtener posts', error);
                  });
              })
              .catch((error) => {
                console.log('error delete', error);
              })
            modal.style.display = 'none';
          } else if (targetId.includes('cancelButton')) {
            modal.style.display = 'none';
          }
        });
      }
      awaitModal();
    } else if (key.includes('b-edit-')) {
      const uidPost = key.replace('b-edit-', '');
      const postText = document.getElementById(`edit-${uidPost}`);
      postText.removeAttribute('disabled');
      postText.focus();
      postText.addEventListener('keydown', async (evnt) => {
        if (evnt.keyCode === 13) {
          await editTextPost(uidPost, postText.value);
          postText.setAttribute('disabled', '');
        }
      });
    } else if (key.includes('like-')) {
      const data = key.split('-');
      likePost(data[1])
        .then(() => {

          querySnapshot()
            .then((doc) => {
              console.log('152222222', doc)
              showAllRecipes(doc);
            })
            .catch((error) => {
              console.error('Error al obtener posts', error);
            });
        })
        .catch((error) => {
          console.log('error delete', error);
        })
    }

  })


  section.append(logo, nav, showPostFeed, modal, formRecipe, write, logoutButtom);

  formRecipe.append(nameRecipeForm, recipe, add, MessageError, MessageOk)
  nav.append(select);
  select.append(option1, option2);
  return section;
}

export default feed;
