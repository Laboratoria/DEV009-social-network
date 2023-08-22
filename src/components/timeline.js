import { getAuth, signOut } from 'firebase/auth';

function timeline(navigateTo) {
  const auth = getAuth();
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
  let userName = ''
  if (user !== null){
    user.providerData.forEach((profile) => {
      userName =  profile.displayName;
    });
  }
  welcomeText.textContent = `¡Bienvenido/a, ${userName}!`;
  welcomeText.classList.add('welcomeText');

  const sectionInput = document.createElement('sectionInput');
  sectionInput.classList.add('sectionInput');

  const sectionPost = document.createElement('sectionPost');
  sectionPost.classList.add('sectionPost');

  const footer = document.createElement('footer');
  footer.classList.add('footer');


  const buttonCreatePost = document.createElement('button');
  buttonCreatePost.textContent = 'publicar';
  buttonCreatePost.classList.add('buttonCreatePost');
  buttonCreatePost.addEventListener('click', () => {
    navigateTo('/newPost');
  });

  const buttonLogOut = document.createElement('img');
  buttonLogOut.src = './images/logOut.png';
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
  sectionInput.append(buttonCreatePost);
  main.append(imgUserProfile, welcomeText, sectionInput, sectionPost);
  section.append(header, main, footer);

  return section;
}

export default timeline;