/* eslint-disable max-len */
import { logOut, auth } from '../lib/firebaseAuth.js';
import {
  addPost,
  getPosts,
  updatePost,
  updateLikePost,
  // getDataAuthor
  deletePost,
} from '../lib/firebaseStore.js';

export const muro = (navigateTo) => {
  const section = document.createElement('section');
  const logoMuro = document.createElement('img');
  logoMuro.src = './recursos/LogoSinLetras.png';
  logoMuro.classList.add('logo-muro');

  // Publicacion
  const publicacion = document.createElement('div');
  publicacion.classList.add('publicacion');
  const areaText = document.createElement('textarea');
  areaText.setAttribute('placeholder', 'Comparte aqui...');
  const botonCompartir = document.createElement('button');
  botonCompartir.classList.add('boton-compartir');
  botonCompartir.textContent = 'Compartir';

  // *************Evento click del botón Compartir*************
  botonCompartir.addEventListener('click', async () => {
    if (areaText.value.trim() !== '') {
      try {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;
          const postId = await addPost(userId, areaText.value.trim());
          if (postId) {
            areaText.value = '';
            // eslint-disable-next-line no-use-before-define
            // Llamada a la función aquí después de agregar la publicación
            await updatePostsList();
          } else {
            console.log('Error al agregar la publicación');
          }
        } else {
          console.log('Usuario no autenticado');
        }
      } catch (error) {
        console.error('Error al agregar la publicación:', error);
      }
    }
  });

  publicacion.append(areaText, botonCompartir);

  // *************Contenedor para los posts*************
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('posts-container');

  // Actualizar la lista de publicaciones
  const updatePostsList = async () => {
    try {
      const posts = await getPosts();
      postsContainer.innerHTML = '';

      // *************Mostrar los posts en el contenedor*************
      posts.forEach(async (post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const contentElement = document.createElement('p');
        contentElement.classList.add('user-post');
        contentElement.textContent = post.content;

        const getLikes = document.createElement('div');
        getLikes.classList.add('likes');
        const heartIcon3 = document.createElement('img');
        heartIcon3.className = 'heart-icon';
        heartIcon3.src = './recursos/heart-regular.svg';
        heartIcon3.alt = 'heart-icon';
        getLikes.appendChild(heartIcon3);

        const spanLikes = document.createElement('span');
        spanLikes.className = 'likes-span';
        const likesCounter = document.createElement('i');
        likesCounter.id = post.id;
        likesCounter.className = 'likes-counter';

        const likesCount = post.liked_by || 0; // Inicializar el contador con 0 si no hay likes
        likesCounter.innerText = likesCount;
        getLikes.appendChild(likesCounter);

        heartIcon3.addEventListener('click', async () => {
          updateLikePost(post.id);
          const newCount = Number(post.liked_by);
          likesCounter.innerText = newCount;
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar 🧁';
        editButton.addEventListener('click', async () => {
          const newContent = prompt('Editar Contenido', contentElement.textContent);
          if (newContent !== null && newContent.trim() !== '') {
            await updatePost(post.id, newContent);
            updatePostsList();
          }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar 💩';
        deleteButton.addEventListener('click', async () => {
          const confirmed = confirm('¿Estás seguro de que deseas eliminar esta publicación?');
          if (confirmed) {
            await deletePost(post.id);
            updatePostsList();
          }
        });

        postElement.append(contentElement, getLikes, editButton, deleteButton);

        postsContainer.append(postElement);
      });
    } catch (error) {
      console.error('Error al obtener las publicaciones:', error);
    }
  };
  // *************Boton de cierre de sesión*************
  const logOutButton = document.createElement('img');
  logOutButton.classList.add('logOut-button');
  logOutButton.src = './recursos/logout.svg';
  logOutButton.alt = 'logOut';
  logOutButton.addEventListener('click', () => {
    const logOutAlert = (valid) => {
      if (valid === true) {
        navigateTo('/');
      }
    };

    logOut(logOutAlert);
  });

  // *************Boton de cierre de sesión*************

  const user = auth.currentUser;
  const userEmail = user.email;
  const userElement = document.createElement('h6');
  userElement.textContent = `${userEmail}`;

  const welcomeUserEmail = document.createElement('p');
  welcomeUserEmail.classList.add('welcome-user-email');
  welcomeUserEmail.textContent = 'Bienvenida ' + userEmail;

  // Llamar a la función para actualizar la lista de publicaciones al cargar la página inicialmente
  updatePostsList();

  section.append(logOutButton, welcomeUserEmail, logoMuro, publicacion, postsContainer);

  return section;
};
