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


const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  console.log('user: ' + user)
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    
    console.log("YES")
    // ...
  } else {
    // User is signed out
    // ...
    console.log("NO")
  }
});

export default timeline;
