import { getAuth, } from 'firebase/auth';

function newPost(navigateTo) {
  const auth = getAuth();
  const user = auth.currentUser;

  const section = document.createElement('section');
  section.classList.add('newPostSection');

  const imgUserProfile = document.createElement('div');
  imgUserProfile.classList.add('imgUserProfile');

  const nameNewPost = document.createElement('p');
  let userName = ''
  if (user !== null){
    user.providerData.forEach((profile) => {
      userName =  profile.displayName;
    });
  }
  nameNewPost.textContent = `¡Hola ${userName}!`;
  nameNewPost.classList.add('nameNewPost')

  const title = document.createElement('h2');
  title.textContent = 'Crear nueva publicación';
  title.classList.add('titlenewPost');

  const newPostText = document.createElement('textarea');
  newPostText.placeholder = '¿Qué estás pensando? ...';
  newPostText.classList.add('newPostText');

  const buttonShare = document.createElement('button');
  buttonShare.textContent = 'Publicar';
  buttonShare.classList.add('share');
  buttonShare.addEventListener('click', () => {
    navigateTo('/timeline');
  });

  const buttonCancel = document.createElement('button');
  buttonCancel.textContent = 'Cancelar';
  buttonCancel.classList.add('noShare');
  buttonCancel.addEventListener('click', () => {
    navigateTo('/timeline');
  });
  section.append(title, imgUserProfile, nameNewPost, newPostText, buttonShare, buttonCancel);

  return section;
}
export default newPost;
