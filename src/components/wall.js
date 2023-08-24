import { auth } from '../firebase/initializeFirebase.js';
import { exitUser, createPostFn, showData } from '../lib/index.js';

function wall(navigateTo) {
  const mainContainer = document.createElement('div');
  const section = document.createElement('section');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const profilePic = document.createElement('img');
  const createPost = document.createElement('textarea');

  const timeLineSection = document.createElement('div');
  const userName = document.createElement('h3');
  const postContent = document.createElement('p');
  const like = document.createElement('img');
  const countLikes = document.createElement('p');

  const menu = document.createElement('nav');
  const home = document.createElement('img');
  const profileMenu = document.createElement('img');
  const exit = document.createElement('img');

  const divPost = document.createElement('div');
  const divUserName = document.createElement('div');
  const divPostContent = document.createElement('div');
  const divLikeEditDelete = document.createElement('div');
  const edit = document.createElement('img');
  const deleteIcon = document.createElement('img');

  edit.src = './icons/edit.svg';
  deleteIcon.src = './icons/delete.svg';

  logo.src = './img/logo.png';
  profilePic.src = './img/perfil.png';
  createPost.placeholder = '¿Cuál fue el último lugar que visitaste?';

  const formPost = document.createElement('form');
  const postBtn = document.createElement('button');
  postBtn.textContent = 'Publicar';

  like.src = './icons/plane.svg';
  countLikes.textContent = '0';
  home.src = './icons/home.svg';
  profilePic.width = 50;
  profileMenu.src = './img/perfil.png';
  exit.src = './icons/exit.svg';

  mainContainer.classList.add('mainConteiner');
  section.classList.add('sectionWall');
  header.classList.add('header');
  logo.classList.add('logoWall');
  profilePic.classList.add('profilePic');
  createPost.classList.add('createPost');
  createPost.setAttribute('required', '');
  createPost.setAttribute('autocapitalize', 'sentences');
  timeLineSection.classList.add('timeLineSection');
  userName.classList.add('userName');
  postContent.classList.add('postContent');
  like.classList.add('like');
  countLikes.classList.add('countLikes');
  menu.classList.add('menu');
  home.classList.add('home');
  profileMenu.classList.add('profileMenu');
  exit.classList.add('exit');
  divPost.classList.add('divPost');
  divUserName.classList.add('divUserNAme');
  divPostContent.classList.add('divPostContent');
  divLikeEditDelete.classList.add('divLikeEditDelete');
  edit.classList.add('edit');
  deleteIcon.classList.add('deleteIcon');

  mainContainer.append(section, header, timeLineSection, divPost, menu);
  section.append(header, profilePic, formPost);
  header.appendChild(logo);
  timeLineSection.append(userName, postContent);
  formPost.append(createPost, postBtn);
  divPost.append(divUserName, divPostContent, divLikeEditDelete);
  divLikeEditDelete.append(like, countLikes, edit, deleteIcon);
  menu.append(home, profileMenu, exit);

  home.addEventListener('click', () => {
    navigateTo('/wall');
  });

  profilePic.addEventListener('click', () => {
    navigateTo('/profile');
  });

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    const alertlogOut = (boolean) => {
      if (boolean) {
        navigateTo('/');
      }
    };
    exitUser(alertlogOut);
  });

  console.log(showData());

  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postCreated = createPost.value;
    const user = auth.currentUser;
    const author = user.displayName;

    await createPostFn(postCreated, author);
    // console.log(content);
    formPost.reset();
    navigateTo('/wall');
  });
  return mainContainer;
}

export default wall;
