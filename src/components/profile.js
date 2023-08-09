import { onAuthStateChanged, auth, signOut } from '../firebase/initializeFirebase';

function profile(navigateTo) {
  const section = document.createElement('section');
  section.innerHTML = `
    <header class="view-profile">
      <p class="user-name-profile">Hola!</p>
      <button class="menu-button">
        <i class="fa-solid fa-bars" style="color: #675ABF;"></i>
      </button>
      <div class="container-profile-picture-profile">
        <img class="profile-img" src="./img/imagenGatoHumanoPrueba.jpeg" class="profile-picture-profile">
        <p class="first-and-last-name">Laura Gonzales</p>
      </div>
    </header>
    <div class="user-post-and-share">
      <button class="input-share-post" onclick="navigateTo('/createPost')">Share what you're thinking</button>
    </div>
    <footer class="footer">
      <nav class="footer-nav">
        <button class="home-nav">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#6A66D9" class="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" stroke="#6A66D9" stroke-width="0.5"/>
          </svg>
        </button>
        <button class="search-nav">
          <svg data-name="Layer 1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.07,16.83,19,14.71a3.08,3.08,0,0,0-3.4-.57l-.9-.9a7,7,0,1,0-1.41,1.41l.89.89A3,3,0,0,0,14.71,19l2.12,2.12a3,3,0,0,0,4.24,0A3,3,0,0,0,21.07,16.83Zm-8.48-4.24a5,5,0,1,1,0-7.08A5,5,0,0,1,12.59,12.59Zm7.07,7.07a1,1,0,0,1-1.42,0l-2.12-2.12a1,1,0,0,1,0-1.42,1,1,0,0,1,1.42,0l2.12,2.12A1,1,0,0,1,19.66,19.66Z" fill="#6A66D9"/>
          </svg>
        </button>
        <button class="new-publication-nav" onclick="navigateTo('/createPost')"></button>
        <button class="profile-nav">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon"  height="45" fill="#6A66D9" viewBox="0 0 1024 1024" version="1.1">
            <path d="M153.6 614.4c-57.4464 0-102.4-67.6864-102.4-154.1632s44.9536-154.1632 102.4-154.1632S256 373.76 256 460.2368 211.0464 614.4 153.6 614.4z m0-257.1264c-24.1664 0-51.2 44.032-51.2 102.9632S129.4336 563.2 153.6 563.2s51.2-44.032 51.2-102.9632-27.0336-102.9632-51.2-102.9632zM358.2976 409.6C300.9536 409.6 256 342.1184 256 256s44.9536-153.6 102.2976-153.6 102.2976 67.4816 102.2976 153.6-44.9536 153.6-102.2976 153.6z m0-256C334.1824 153.6 307.2 197.376 307.2 256s26.9824 102.4 51.0976 102.4 51.0976-43.776 51.0976-102.4-26.9824-102.4-51.0976-102.4zM614.4 409.6c-57.4464 0-102.4-67.4816-102.4-153.6s44.9536-153.6 102.4-153.6 102.4 67.4816 102.4 153.6-44.9536 153.6-102.4 153.6z m0-256c-24.1664 0-51.2 43.776-51.2 102.4s27.0336 102.4 51.2 102.4 51.2-43.776 51.2-102.4-27.0336-102.4-51.2-102.4zM819.2 614.4c-57.4464 0-102.4-67.6864-102.4-154.1632s44.9536-154.1632 102.4-154.1632 102.4 67.6864 102.4 154.1632S876.6464 614.4 819.2 614.4z m0-257.1264c-24.1664 0-51.2 44.032-51.2 102.9632S795.0336 563.2 819.2 563.2s51.2-44.032 51.2-102.9632-27.0336-102.9632-51.2-102.9632zM665.6 921.6c-44.4416 0-74.496-15.0528-100.9664-28.3136-24.576-12.288-45.7728-22.8864-78.2336-22.8864-32.3072 0-53.504 10.5984-78.08 22.8864C381.7472 906.5472 351.6416 921.6 307.2 921.6c-28.4672 0-55.2448-15.5136-73.5744-42.5472-32.1024-47.4112-32.6144-119.3472-1.4336-197.376C288.3584 541.2864 380.9792 460.8 486.3488 460.8s198.0416 80.4864 254.1568 220.8768c31.1808 78.0288 30.6688 149.9648-1.4336 197.376-18.2784 27.0336-45.1072 42.5472-73.5744 42.5472z m-179.2-102.4c44.4928 0 74.5984 15.0528 101.12 28.3136 24.5248 12.288 45.7216 22.8864 78.08 22.8864 11.1616 0 22.528-7.3216 31.1808-20.0192 22.1184-32.6144 20.6848-88.576-3.7376-149.6576C645.0688 580.8128 569.7536 512 486.4 512s-158.6688 68.7616-206.6432 188.7232c-24.4224 61.0816-25.8048 117.0432-3.7376 149.6576 8.6016 12.7488 19.968 20.0192 31.1808 20.0192 32.3584 0 53.6064-10.5984 78.2336-22.9376 26.5216-13.2608 56.6272-28.3136 100.9664-28.3136z" stroke="#6A66D9" stroke-width="20" />
          </svg>
        </button>
      </nav>
    </footer>
`;

  const inputSharePost = section.querySelector('.input-share-post');
  const newPublicationNav = section.querySelector('.new-publication-nav');
  const profileImg = section.querySelector('.profile-img');
  const userNameProfile = section.querySelector('.first-and-last-name');
  const homeNav = section.querySelector('.home-nav');

  inputSharePost.addEventListener('click', () => {
    navigateTo('/createPost');
  });
  newPublicationNav.addEventListener('click', () => {
    navigateTo('/createPost');
  });

  homeNav.addEventListener('click', () => {
    signOut(auth);
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.photoURL);
      profileImg.src = user.photoURL;
      userNameProfile.textContent = user.displayName;
      console.log(user);
      console.log(user.email);
      console.log(user.displayName);
    // ...
    } else {
    // User is signed out
    // ...
    }
  });

  return section;
}
export default profile;
