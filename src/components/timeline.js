import {
  readDataWithIdUser, saveNewPost, readCollectionData, deletePostWhitId,
} from '../lib/credentials.js';
import { auth, signOut } from '../lib/initializerFirebase.js';

function timeline(navigateTo) {
  const user = auth.currentUser;

  const section = document.createElement('section');
  section.classList.add('timelineSection');

  const header = document.createElement('header');
  header.classList.add('header');

  const imagenGuideMaPA = document.createElement('img');
  imagenGuideMaPA.classList.add('imagenGuideMaPa');
  imagenGuideMaPA.src = './images/logoWords.png';

  const sidebar = document.createElement('sidebar');
  sidebar.classList.add('sidebar');

  const main = document.createElement('main');
  main.classList.add('main');

  const porfileImage = document.createElement('img');
  porfileImage.src = './images/svg/user-solid.svg';
  porfileImage.alt = 'imagen de perfil';
  porfileImage.classList.add('porfileImage');

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
    readCollectionData('posts'/* , 'idUser', '==', user.uid */).then((collection) => {
      collection.forEach((elementCollection) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        const porfileImg = document.createElement('img');
        porfileImg.src = './images/svg/user-solid.svg';
        porfileImg.alt = 'imagen de perfil';
        porfileImg.classList.add('postImgPorfile');
        const userName = document.createElement('p');
        userName.classList.add('postUserName');
        const textPost = document.createElement('p');
        textPost.classList.add('postText');
        const userId = elementCollection.data().idUser;/*
        readDataWithIdUser('posts', doc.id).then((data) => {
          textPost.textContent = `${data.post}`;
          userName.textContent = 'userName';
        }); */
        readDataWithIdUser('users', userId).then((userData) => {
          textPost.textContent = `${elementCollection.data().post}`;
          userName.textContent = userData.username;
          if (userId === user.uid) {
            // Boton Editar
            const buttonEdit = document.createElement('img');
            buttonEdit.src = './images/svg/pen-solid.svg';
            buttonEdit.classList.add('buttonEdit');
            postDiv.append(buttonEdit);
            buttonEdit.addEventListener('click', () => {
              alert('Editar');
            });
            // Boton Eliminar
            const buttonDelete = document.createElement('img');
            buttonDelete.src = './images/svg/trash-solid.svg';
            buttonDelete.classList.add('buttonDelete');
            postDiv.append(buttonDelete);
            buttonDelete.addEventListener('click', () => {
              if (confirm('El post se eliminara permanentemente.\n ¿Estas de acuerdo con eliminarlo?')) {
                deletePostWhitId('posts', elementCollection.id);
                postDiv.parentElement.removeChild(postDiv);
              }
            });
          }
        });

        postDiv.append(porfileImg, userName, textPost);
        sectionPost.append(postDiv);
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
    // const newPostDiv = document.createElement('div');
    // newPostDiv.innerText = postValue;
    // sectionPost.prepend(newPostDiv);
    inputNewPost.value = '';
    saveNewPost(postValue, user.uid);
    navigateTo('/timeline');
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
  header.append(imagenGuideMaPA, sidebar);
  sectionInput.append(porfileImage, welcomeText, inputNewPost, buttonCreatePost);
  main.append(sectionInput, sectionPost);
  section.append(header, main, footer);

  return section;
}

export default timeline;
