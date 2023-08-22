// Importar funciones y variables necesarias
import {
  signOutUser,
  addPost,
  displayAllUserPosts,
} from '../lib/index';
import {
  onAuthStateChanged,
  auth,
  serverTimestamp,
} from '../firebase/initializeFirebase';
import logoProfile from '../img/logo-profile.png';
import homeFill from '../img/home-fill.png';
import personCircle from '../img/person-circle.svg';

// Definir la función 'timeline'
function timeline(navigateTo) {
  // Crear un elemento de sección
  const section = document.createElement('section');
  section.classList.add('timeline-component');

  // Agregar contenido HTML al elemento de sección
  section.innerHTML = `
    <!-- Encabezado de la página -->
    <header class="header-timeline">
      <!-- Logo y botones -->
      <div class="container-logo-timeline">
        <img src=${logoProfile} class="logo-timeline">
      </div>
      <button class="fa-regular fa-heart" style="color: #6F60CF;"></button>
      <button class="menu-button">
        <i class="fa-solid fa-bars" style="color: #675ABF;"></i>
      </button>
      <div class="menu">
        <div class="menu-content">
          <span href="#/register" class="close-menu">
            <i class="fa-solid fa-circle-xmark"></i>
          </span>
          <nav>
            <ul>
              <li class='home'>Home</li>
              <li class='profile'>My Profile</li>
              <li class='sign-off'>Sign Off</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    
    <!-- Publicar un nuevo post -->
    <div class='post'>
      <div class ='container-post'>
        <header class="header-create-post">
          <button class="exit-create-post">
            <i class="fa-solid fa-circle-xmark" style="color: #7465D8;"></i>
          </button>
          <p class="title-create-post">Create a post</p>
          <button class="button-publish-post">Publish</button>
        </header>
        <div class="new-post">
          <div class="container-picture-user-name">
            <div class="container-profile-picture-create">
              <img src="" class="profile-picture-create-post">
              <p class="user-name-create-post"></p>
            </div>
          </div>
          <textarea class="create-new-post" placeholder="Share what you're thinking"></textarea>
        </div>
      </div>
    </div>
    
    <!-- Modal de confirmación para eliminar post -->
    <div class="modal">
      <div class="modal-content">
        <h3>Want to delete the post?</h3>
        <hr>
        <p class="message-modal">The post will be deleted</p>
        <button class="close-confirm">Cancel</button>
        <button class="confirm-btn">Confirm</button>
      </div>
    </div>
    
    <!-- Contenedor de posts del usuario -->
    <div class="user-posts-container-timeline"></div>
    
    <!-- Pie de página -->
    <footer class="footer">
      <nav class="footer-nav">
        <button class="home-nav">
          <img src=${homeFill} width="40"></img>
        </button>
        <button class="search-nav">
          <svg data-name="Layer 1" viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.07 16.83 19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89A3 3 0 0 0 14.71 19l2.12 2.12a3 3 0 0 0 4.24 0A3 3 0 0 0 21.07 16.83Zm-8.48-4.24a5 5 0 1 1 0-7.08A5 5 0 0 1 12.59 12.59Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42 1 1 0 0 1 1.42 0l2.12 2.12A1 1 0 0 1 19.66 19.66Z" fill="#6A66D9"/>
          </svg>
        </button>
        <button class="new-publication-nav">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="none" stroke="#6A66D9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="#6A66D9"/>
          </svg>
        </button>
        <button class="profile-nav">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon"  width="40" height="40" fill="#6A66D9" viewBox="0 0 1024 1024" version="1.1">
            <path d="M153.6 614.4c-57.4464 0-102.4-67.6864-102.4-154.1632s44.9536-154.1632 102.4-154.1632S256 373.76 256 460.2368 211.0464 614.4 153.6 614.4z m0-257.1264c-24.1664 0-51.2 44.032-51.2 102.9632S129.4336 563.2 153.6 563.2s51.2-44.032 51.2-102.9632-27.0336-102.9632-51.2-102.9632zM358.2976 409.6C300.9536 409.6 256 342.1184 256 256s44.9536-153.6 102.2976-153.6 102.2976 67.4816 102.2976 153.6-44.9536 153.6-102.2976 153.6z m0-256C334.1824 153.6 307.2 197.376 307.2 256s26.9824 102.4 51.0976 102.4 51.0976-43.776 51.0976-102.4-26.9824-102.4-51.0976-102.4zM614.4 409.6c-57.4464 0-102.4-67.4816-102.4-153.6s44.9536-153.6 102.4-153.6 102.4 67.4816 102.4 153.6-44.9536 153.6-102.4 153.6z m0-256c-24.1664 0-51.2 43.776-51.2 102.4s27.0336 102.4 51.2 102.4 51.2-43.776 51.2-102.4-27.0336-102.4-51.2-102.4zM819.2 614.4c-57.4464 0-102.4-67.6864-102.4-154.1632s44.9536-154.1632 102.4-154.1632 102.4 67.6864 102.4 154.1632S876.6464 614.4 819.2 614.4z m0-257.1264c-24.1664 0-51.2 44.032-51.2 102.9632S795.0336 563.2 819.2 563.2s51.2-44.032 51.2-102.9632-27.0336-102.9632-51.2-102.9632zM665.6 921.6c-44.4416 0-74.496-15.0528-100.9664-28.3136-24.576-12.288-45.7728-22.8864-78.2336-22.8864-32.3072 0-53.504 10.5984-78.08 22.8864C381.7472 906.5472 351.6416 921.6 307.2 921.6c-28.4672 0-55.2448-15.5136-73.5744-42.5472-32.1024-47.4112-32.6144-119.3472-1.4336-197.376C288.3584 541.2864 380.9792 460.8 486.3488 460.8s198.0416 80.4864 254.1568 220.8768c31.1808 78.0288 30.6688 149.9648-1.4336 197.376-18.2784 27.0336-45.1072 42.5472-73.5744 42.5472z m-179.2-102.4c44.4928 0 74.5984 15.0528 101.12 28.3136 24.5248 12.288 45.7216 22.8864 78.08 22.8864 11.1616 0 22.528-7.3216 31.1808-20.0192 22.1184-32.6144 20.6848-88.576-3.7376-149.6576C645.0688 580.8128 569.7536 512 486.4 512s-158.6688 68.7616-206.6432 188.7232c-24.4224 61.0816-25.8048 117.0432-3.7376 149.6576 8.6016 12.7488 19.968 20.0192 31.1808 20.0192 32.3584 0 53.6064-10.5984 78.2336-22.9376 26.5216-13.2608 56.6272-28.3136 100.9664-28.3136z" stroke="#6A66D9" stroke-width="18" />
          </svg>
        </button>
      </nav>
    </footer>
  `;

  // Obtener elementos del DOM y agregar manejadores de eventos
  const menu = section.querySelector('.menu');
  const menuButton = section.querySelector('.menu-button');
  const closeMenu = section.querySelector('.close-menu');
  const homeMenu = section.querySelector('.home');
  const profileMenu = section.querySelector('.profile');
  const signOff = section.querySelector('.sign-off');
  const newPublicationNav = section.querySelector('.new-publication-nav');
  const profileNav = section.querySelector('.profile-nav');
  const profileImage = section.querySelector('.profile-picture-create-post');
  const post = section.querySelector('.post');
  const userName = section.querySelector('.user-name-create-post');
  const exitCreatePost = section.querySelector('.exit-create-post');
  const createPost = section.querySelector('.create-new-post');
  const publish = section.querySelector('.button-publish-post');
  const userNameProfile = section.querySelector('.first-and-last-name');

  // Manejador para cerrar la sección de creación de post
  exitCreatePost.addEventListener('click', () => {
    post.style.display = 'none';
  });

  // Manejador para detectar el estado de autenticación
  onAuthStateChanged(auth, async (user) => {
    console.log(`inside promise: ${user.displayName}`);
    if (user) {
      // Mostrar los posts del usuario autenticado
      const postsContainer = section.querySelector('.user-posts-container-timeline');
      console.log(user.displayName);
      await displayAllUserPosts(user, postsContainer);

      // Mostrar la imagen de perfil del usuario
      const srcPhoto = user.photoURL;
      console.log(srcPhoto);
      if (user.photoURL) {
        profileImage.src = `${srcPhoto}`;
        profileImage.innerHTML = `<img class="photo-URL" src="${user.photoURL}" />`;
      } else {
        profileImage.src = `${personCircle}`;
        profileImage.innerHTML = `<img class="photo-URL" src=${personCircle} />`;
      }

      // Mostrar el nombre de usuario
      const wholeUserName = user.displayName;
      const shortName = wholeUserName.slice(0, wholeUserName.indexOf(' '));
      console.log(shortName);
      userName.textContent = shortName;
      userNameProfile.textContent = shortName;
    } else {
      // Usuario no autenticado
      // ...
    }
  });

  // Manejadores de eventos para el menú y la navegación
  menuButton.addEventListener('click', () => {
    menu.style.display = 'block';
  });

  closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
  });

  homeMenu.addEventListener('click', () => {
    navigateTo('/timeline');
  });

  profileMenu.addEventListener('click', () => {
    navigateTo('/profile');
  });

  signOff.addEventListener('click', () => {
    signOutUser();
    navigateTo('/');
  });

  newPublicationNav.addEventListener('click', () => {
    post.style.display = 'block';
  });

  profileNav.addEventListener('click', () => {
    navigateTo('/profile');
  });

  // Manejador de eventos para publicar un nuevo post
  publish.addEventListener('click', async () => {
    const user = auth.currentUser;
    const contentPost = createPost.value;
    const author = user.displayName;
    const date = serverTimestamp();
    if (contentPost !== '') {
      addPost(author, contentPost, date).then(() => {
        const postsContainer = section.querySelector('.user-posts-container-timeline');
        displayAllUserPosts(user, postsContainer);
        createPost.value = '';
      });
    } else {
      alert('Please write something');
    }
    post.style.display = 'none';
  });

  // Devolver la sección completa
  return section;
}

// Exportar la función 'timeline'
export default timeline;
