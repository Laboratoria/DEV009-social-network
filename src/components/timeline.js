import { readDataWithIdUser, saveNewPost, readCollectionData } from '../lib/credentials.js';
import { auth, signOut } from '../lib/initializerFirebase.js';

function timeline() {
  const user = auth.currentUser;

  const section = document.createElement('section');
  section.classList.add('timelineSection');

  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h2');
  title.textContent = 'Guide Ma+Pa';
  title.classList.add('titletimeline');

  const imgUserProfile = document.createElement('div');
  imgUserProfile.classList.add('imgUserProfile');

  const sidebar = document.createElement('sidebar');
  sidebar.classList.add('sidebar');

  const main = document.createElement('main');
  main.classList.add('main');

  const welcomeText = document.createElement('p');
  if (user) {
    welcomeText.classList.add('welcomeText');
    readDataWithIdUser('users', user.uid).then((data) => {
      welcomeText.textContent = `¡Hola, ${data.username}!`;
    });
  }
  const sectionInput = document.createElement('section');
  sectionInput.classList.add('sectionInput');

  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');
  if (user) {
    readCollectionData('posts', 'idUser', '==', user.uid).then((result) => {
      result.forEach((doc) => {
        const postDiv = document.createElement('div');
        const porfileImg = document.createElement('img');
        porfileImg.alt = 'imagen de perfil';
        const userName = document.createElement('p');
        const textPost = document.createElement('p');
        readDataWithIdUser('posts', doc.id).then((data) => {
          textPost.textContent = `${data.post}`;
          userName.textContent = 'userName';
        });
        postDiv.append(porfileImg, userName, textPost);
        sectionPost.append(postDiv);
        if (doc.data().idUser === user.id) {
          postDiv.classList.add('deletOrDeletDiv');
        } else {
          postDiv.classList.add('reactDiv');
        }
      });
    });
  }
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const inputNewPost = document.createElement('input');
  inputNewPost.classList.add('inputNewPost');
  const placeHolderInput = 'Que estas pensando...';
  inputNewPost.placeholder = placeHolderInput;

  const buttonCreatePost = document.createElement('button');
  buttonCreatePost.textContent = 'publicar';
  buttonCreatePost.classList.add('buttonCreatePost');
  buttonCreatePost.addEventListener('click', () => {
    // navigateTo('/newPost');
    const postValue = inputNewPost.value;
    const newPostDiv = document.createElement('div');
    newPostDiv.innerText = postValue;
    main.append(newPostDiv);
    inputNewPost.value = '';
    saveNewPost(postValue, user.uid);
  });

  const buttonLogOut = document.createElement('img');
  buttonLogOut.src = '../images/svg/logout.svg';
  buttonLogOut.classList.add('buttonLogOut');
  buttonLogOut.addEventListener('click', () => {
    signOut(auth).then(() => {
      localStorage.clear();
    }).catch((error) => {
      // An error happened.
    });
  });
  sidebar.append(buttonLogOut);
  header.append(title, sidebar);
  sectionInput.append(inputNewPost, buttonCreatePost);
  main.append(imgUserProfile, welcomeText, sectionInput, sectionPost);
  section.append(header, main, footer);

  return section;
}

export default timeline;
