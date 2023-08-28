import { logoutUser } from '../lib/index.js';
import {
  addRecipe,
  querySnapshot,
  deletePost,
  editTextPost,
  likePost,
} from '../lib/dataBase';

function feed(navigateTo) {
  const section = document.createElement('section');
  //const nav = document.createElement('nav');
  //const select = document.createElement('select');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const write = document.createElement('button');
  const logo = document.createElement('img');
  const logoutButtom = document.createElement('button');
  const MessageOk = document.createElement('p');
  const MessageError = document.createElement('p');
  const recipe = document.createElement('textarea');
  const formRecipe = document.createElement('form');
  const nameSteps = document.createElement('input');
  const add = document.createElement('button');
  const showPostFeed = document.createElement('div');
  logo.src = './imagenes/image.png';
  write.textContent = 'Añade una Receta';
  // option1.value = 'Mejores Recetas';
  // option1.textContent = 'Mejores Recetas';
  // option2.value = 'Usuarios';
  // option2.textContent = 'Usuarios';
  recipe.placeholder = 'ingresa tu receta';
  formRecipe.style.display = 'none';
  nameSteps.type = 'text';
  nameSteps.placeholder = 'Nombre de la receta';
  add.textContent = 'Agregar';
  logoutButtom.textContent = 'Cerrar Sesión 💨';
  logoutButtom.className = 'logout';
  MessageOk.style.color = 'green';
  MessageError.style.color = 'grey';

  // funcion de mostrar el recipe
  function showAllRecipes(allRecipes) {
    showPostFeed.innerHTML = '';
    allRecipes.forEach((recipeContent) => {
      const postRecipe = `
      <div class="postRecipe" id="post-${recipeContent.id}">
      <h5 class="user"><img class="perfile" src="./imagenes/Profil.png" />${recipeContent.user}</h5>
        <p class="name">${recipeContent.name}</p>
        <p>Pasos:</p>
        <textarea  type="text" id="edit-${recipeContent.id}" class="steps" disabled>${recipeContent.steps}</textarea>
        <div class="footer-post">
        <p class="recipeLikes">${recipeContent.likes}</p>
        <button id="like-${recipeContent.id}">⭐</button>
        <button class="edit" id="b-edit-${recipeContent.id}">🖋️</button>
        <button class="delete" id="delete-${recipeContent.id}">🗑️</button>
        </div>
      </div>`;
      showPostFeed.innerHTML += postRecipe;
    });
  }

  querySnapshot()
    .then((doc) => {
      showAllRecipes(doc);
    })
    .catch((error) => {
      console.error('Error al obtener posts', error);
    });

  logoutButtom.addEventListener('click', () => {
    logoutUser();
    navigateTo('/');
  });

  write.addEventListener('click', () => {
    formRecipe.style.display = 'block';
    write.style.display = 'none';
    recipe.value = '';
    nameSteps.value = '';
  });

  add.addEventListener('click', async (event) => {
    event.preventDefault();
    const recipeData = recipe.value;
    const nameRecipe = nameSteps.value;
    formRecipe.style.display = 'none';
    write.style.display = 'block';
    if (!nameRecipe || !recipeData) {
      MessageError.textContent = 'Por favor, completa ambos campos.';
      return;
    }
    {
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
      }
    }
    formRecipe.style.display = 'none';
    write.style.display = 'block';
  });
  // ventana modal para eliminar el post
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.display = 'none';
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

  function awaitModal(key) {
    modalContent.addEventListener('click', (event) => {
      const targetId = event.target.id;
      if (targetId.includes('deleteButton')) {
        deletePost(key.replace('delete-', ''))
          .then(() => {
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
          });
        modal.style.display = 'none';
      } else if (targetId.includes('cancelButton')) {
        modal.style.display = 'none';
      }
    });
  }

  section.addEventListener('click', async (event) => {
    const key = (event.target.id);
    if (key.includes('delete-')) {
      modal.style.display = 'block';
      awaitModal(key);
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
              showAllRecipes(doc);
            })
            .catch((error) => {
              console.error('Error al obtener posts', error);
            });
        })
        .catch((error) => {
          console.log('error delete', error);
        });
    }
  });
  section.append(logo, showPostFeed, modal, formRecipe, write, logoutButtom);
  formRecipe.append(nameSteps, recipe, add, MessageError, MessageOk);

  return section;
}

export default feed;
