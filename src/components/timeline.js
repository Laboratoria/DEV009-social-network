import { getAuth, signOut } from 'firebase/auth';

function timeline(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('timelineSection');

  const title = document.createElement('h2');
  title.textContent = 'muro Guide Ma+Pa';
  title.classList.add('titletimeline');

  const buttonCreatePost = document.createElement('button');
  buttonCreatePost.textContent = 'publicar';
  buttonCreatePost.classList.add('CreatePost');
  buttonCreatePost.addEventListener('click', () => {
    navigateTo('/newPost');
  });

  const auth = getAuth();
  const buttonLogOut = document.createElement('img');
  buttonLogOut.src = './images/logOut.png';
  buttonLogOut.classList.add('buttonLogOut');
  buttonLogOut.addEventListener('click', () => {
    signOut(auth);
  });

  section.append(title, buttonCreatePost, buttonLogOut);

  return section;
}

export default timeline;
