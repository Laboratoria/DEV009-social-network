import { onAuthStateChanged, auth } from '../firebase/initializeFirebase';

function createPost(navigateTo) {
  const section = document.createElement('section');
  section.innerHTML = `
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
                    <img src="./img/imagenGatoHumanoPrueba.jpeg" class="profile-picture-create-post">
                <p class="user-name-create-post"></p>
                </div>
            </div>
            <input type="text" class="create-new-post" placeholder="Share what you're thinking">
        </div>
    `;

  const profileImage = section.querySelector('.profile-picture-create-post');
  profileImage.classList.add('profile-picture-create-post');
  const userName = section.querySelector('.user-name-create-post');
  const exitCreatePost = section.querySelector('.exit-create-post');
  exitCreatePost.addEventListener('click', () => {
    navigateTo('/profile');
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // profileImg.src = user.photoURL;
      // userNameProfile.textContent = user.displayName;
      console.log(user);
      console.log(user.email);
      console.log(user.displayName);
      console.log(user.photoURL);
      const srcPhoto = user.photoURL;
      console.log(srcPhoto);
      if (user.photoURL) {
        profileImage.src = `${srcPhoto}`;
      } else {
        profileImage.src = './img/person-circle.svg';
      }
      const wholeUserName = user.displayName;
      const shortName = wholeUserName.slice(0, wholeUserName.indexOf(' '));
      userName.textContent = shortName;
    // ...
    } else {
    // User is signed out
    // ...
    }
  });

  return section;
}
export default createPost;
