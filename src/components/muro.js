import { logOut, auth } from '../lib/firebaseAuth.js';
import {
  addPost,
  getPosts,
  updatePost,
  updateLikePost,
  getDataAuthor,
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
  areaText.textContent = 'Comparte aquí...';
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
            await updatePostsList(); // Llamada a la función aquí después de agregar la publicación
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

  // *************Boton de cierre de sesión*************
  const logOutButton = document.createElement('button');
  logOutButton.classList.add('logOut-button');
  logOutButton.textContent = 'Cerrar sesion';
  logOutButton.addEventListener('click', () => {
    const logOutAlert = (valid) => {
      if (valid === true) {
        navigateTo('/');
      }
    };

    logOut(logOutAlert);
  });
  publicacion.append(areaText, botonCompartir);

  section.append(logoMuro, publicacion, postsContainer, logOutButton);

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

        const likesCounter = document.createElement('span');
        likesCounter.className = 'likes-counter';
        likesCounter.innerText = ` ${post.liked_by.length} `;
        getLikes.appendChild(likesCounter);

        heartIcon3.addEventListener('click', async () => {
          const freshPost = await getDataAuthor(posts.ref);
          const heartIconPost = await updateLikePost(posts.ref, freshPost);
          heartIcon3.src = heartIconPost;
        });

        const userElement = document.createElement('h6');
        userElement.textContent = `Publicado por: ${post.userId}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar 🧁';
        editButton.addEventListener('click', async () => {
          const newContent = prompt('Editar Contenido', contentElement.textContent);
          if (newContent !== null && newContent.trim() !== '') {
            await updatePost(post.id, newContent);
            updatePostsList();
          }
        });

        postElement.append(userElement, contentElement, getLikes, editButton);

        postsContainer.append(postElement);
      });
    } catch (error) {
      console.error('Error al obtener las publicaciones:', error);
    }
  };

  // Llamar a la función para actualizar la lista de publicaciones al cargar la página inicialmente
  updatePostsList();
  return section;
};
