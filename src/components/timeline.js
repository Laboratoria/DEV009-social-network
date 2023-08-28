import { readDataWithIdUser, saveNewPost } from '../lib/credentials.js';
import { auth, signOut } from '../lib/initializerFirebase.js';

function timeline(navigateTo) {
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
      console.log(data);
    });
  }
  const sectionInput = document.createElement('sectionInput');
  sectionInput.classList.add('sectionInput');

  const sectionPost = document.createElement('sectionPost');
  sectionPost.classList.add('sectionPost');

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
    saveNewPost(postValue);
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
