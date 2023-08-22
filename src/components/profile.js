import { onAuthStateChanged, auth, serverTimestamp } from '../firebase/initializeFirebase';
import { signOutUser, addPost, displayUserPosts } from '../lib/index.js';
import logoProfile from '../img/logo-profile.png';
import paw from '../img/paw-fill.png';
import personCircle from '../img/person-circle.svg';

function profile(navigateTo) {
  // Crear el elemento de la sección
  const section = document.createElement('section');
  section.classList.add('profile-component');
  // HTML de la sección
  section.innerHTML = `
    <!-- Encabezado de la vista de perfil -->
    <header class="view-profile">
      <img class="logo-profile" src=${logoProfile}>
      <button class="menu-button">
        <i class="fa-solid fa-bars" style="color: #675ABF;"></i>
      </button>
      <!-- Menú lateral -->
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
    
    <!-- Sección de imagen de perfil y nombre -->
    <div class="container-profile-picture-profile">
      <div class="profile-picture"></div>
      <p class="first-and-last-name"></p>
    </div>
    
    <!-- Sección de publicación de usuario -->
    <div class="user-post-and-share">
      <button class="input-share-post">Share what you're thinking</button>
    </div> 
    
    <!-- Contenedor de las publicaciones del usuario -->
    <div class="user-posts-container"></div>
    
    <!-- Ventana emergente para crear una nueva publicación -->
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
    
    <!-- Ventana emergente de confirmación -->
    <div class="modal">
      <div class="modal-content">
        <h3>Want to delete the post?</h3>
        <hr>
        <p class="message-modal">The post will be deleted</p>
        <button class="close-confirm">Cancel</button>
        <button class="confirm-btn">Confirm</button>
      </div>
    </div>
    
    <!-- Pie de página -->
    <footer class="footer">
      <nav class="footer-nav">
        <button class="home-nav">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#6A66D9" class="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" stroke="#6A66D9" stroke-width="0.2"/>
          </svg>
        </button>
        <button class="search-nav">
          <svg data-name="Layer 1" viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.07,16.83,19,14.71a3.08,3.08,0,0,0-3.4-.57l-.9-.9a7,7,0,1,0-1.41,1.41l.89.89A3,3,0,0,0,14.71,19l2.12,2.12a3,3,0,0,0,4.24,0A3,3,0,0,0,21.07,16.83Zm-8.48-4.24a5,5,0,1,1,0-7.08A5,5,0,0,1,12.59,12.59Zm7.07,7.07a1,1,0,0,1-1.42,0l-2.12-2.12a1,1,0,0,1,0-1.42,1,1,0,0,1,1.42,0l2.12,2.12A1,1,0,0,1,19.66,19.66Z" fill="#6A66D9"/>
          </svg>
        </button>
        <button class="new-publication-nav">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="none" stroke="#6A66D9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="#6A66D9"/>
          </svg>
        </button>
        <button class="profile-nav">
          <img src=${paw} width="35"></img>
        </button>
      </nav>
    </footer>
  `;

  // Elementos del DOM
  const homeNav = section.querySelector('.home-nav');
  const homeMenu = section.querySelector('.home');
  const profileMenu = section.querySelector('.profile');
  const inputSharePost = section.querySelector('.input-share-post');
  const newPublicationNav = section.querySelector('.new-publication-nav');
  const profileImg = section.querySelector('.profile-picture');
  const userNameProfile = section.querySelector('.first-and-last-name');
  const menuButton = section.querySelector('.menu-button');
  const closeMenu = section.querySelector('.close-menu');
  const menu = section.querySelector('.menu');
  const signOff = section.querySelector('.sign-off');
  const profileImage = section.querySelector('.profile-picture-create-post');
  const post = section.querySelector('.post');
  const userName = section.querySelector('.user-name-create-post');
  const exitCreatePost = section.querySelector('.exit-create-post');
  const createPost = section.querySelector('.create-new-post');
  const publish = section.querySelector('.button-publish-post');

  // Manejadores de eventos
  homeNav.addEventListener('click', () => {
    navigateTo('/timeline');
  });

  newPublicationNav.addEventListener('click', () => {
    post.style.display = 'block';
  });

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

  inputSharePost.addEventListener('click', () => {
    post.style.display = 'block';
  });

  exitCreatePost.addEventListener('click', () => {
    post.style.display = 'none';
  });

  // Observador de autenticación
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Mostrar información de usuario autenticado
      const postsContainer = section.querySelector('.user-posts-container');
      await displayUserPosts(user, postsContainer);
      const srcPhoto = user.photoURL || `${personCircle}`;
      profileImage.src = srcPhoto;
      profileImg.innerHTML = `<img class="photo-URL" src="${srcPhoto}" />`;

      const wholeUserName = user.displayName;
      const shortName = wholeUserName.slice(0, wholeUserName.indexOf(' '));
      userName.textContent = shortName;
      userNameProfile.textContent = shortName;
    }
  });

  // Publicar nueva entrada
  publish.addEventListener('click', async () => {
    const user = auth.currentUser;
    const contentPost = createPost.value;
    const author = user.displayName;
    const date = serverTimestamp();

    if (contentPost !== '') {
      addPost(author, contentPost, date).then(() => {
        const postsContainer = section.querySelector('.user-posts-container');
        displayUserPosts(user, postsContainer);
        createPost.value = '';
      });
    }
    post.style.display = 'none';
  });

  return section;
}

export default profile;
