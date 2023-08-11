import { getAuth, onAuthStateChanged } from "firebase/auth";


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

  section.append(title, buttonCreatePost);

  return section;
}

export default timeline;
