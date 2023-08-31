import {
  readDataWithIdUser, saveNewPost, readCollectionData, deletePostWhitId, updatePost,
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

  function createModal(textPost, idPost) {
    const modal = document.createElement('dialog');
    modal.classList.add('updatePostModal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modalContent');
    const titulo = document.createElement('h2');
    titulo.classList.add('titleModal');
    titulo.innerHTML = 'Modifica tu publicación';
    const modalText = document.createElement('textarea');
    modalText.value = textPost;
    const buttonSavePost = document.createElement('button');
    buttonSavePost.className = 'buttonUpdate';
    buttonSavePost.innerText = 'guardar cambios';
    buttonSavePost.addEventListener('click', () => {
      if (modalText.value) {
        updatePost('posts', idPost, modalText.value).then(() => {
          modal.close();
          navigateTo('/timeline');
        });
      } else {
        alert('escribe una publicación');
      }
    });
    const buttonCancelPost = document.createElement('button');
    buttonCancelPost.className = 'buttonCancelPost';
    buttonCancelPost.innerText = 'cancelar';
    buttonCancelPost.addEventListener('click', () => {
      console.log('se cancelo la publicacion');
      modal.close();
    });
    modalContent.append(titulo, modalText, buttonSavePost, buttonCancelPost);
    modal.appendChild(modalContent);
    sectionPost.appendChild(modal);
    modal.showModal();
  }
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
              createModal(elementCollection.data().post, elementCollection.id);
            });
            // Boton Eliminar
            const buttonDelete = document.createElement('img');
            buttonDelete.src = './images/svg/trash-solid.svg';
            buttonDelete.classList.add('buttonDelete');
            postDiv.append(buttonDelete);
            buttonDelete.addEventListener('click', () => {
              const modalDelete = document.createElement('dialog');
              modalDelete.classList.add('modalDelete');
              const buttonDeletePost = document.createElement('button');
              buttonDeletePost.classList.add('buttonModalDelete');
              buttonDeletePost.innerText = 'Borrar publicación';
              buttonDeletePost.addEventListener('click', () => {
                deletePostWhitId('posts', elementCollection.id);
                postDiv.parentElement.removeChild(postDiv);
                modalDelete.close();
              });
              const buttonCancelDelete = document.createElement('button');
              buttonCancelDelete.classList.add('buttonModalDelete');
              buttonCancelDelete.innerText = 'cancelar';
              buttonCancelDelete.addEventListener('click', () => {
                modalDelete.close();
              });
              modalDelete.append(buttonDeletePost, buttonCancelDelete);
              sectionPost.append(modalDelete);
              modalDelete.showModal();
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
  inputNewPost.maxLength = 300;
  inputNewPost.classList.add('inputNewPost');
  const placeHolderInput = 'Que estas pensando...';
  inputNewPost.placeholder = placeHolderInput;

  const buttonCreatePost = document.createElement('button');
  buttonCreatePost.textContent = 'publicar';
  buttonCreatePost.classList.add('buttonCreatePost');
  buttonCreatePost.addEventListener('click', () => {
    const postValue = inputNewPost.value;
    if (postValue) {
      inputNewPost.value = '';
      saveNewPost(postValue, user.uid);
      navigateTo('/timeline');
    } else {
      alert('escribe una publicación');
    }
  });
  const buttonLogOut = document.createElement('img');
  buttonLogOut.src = '../images/svg/logout.svg';
  buttonLogOut.classList.add('buttonLogOut');
  buttonLogOut.addEventListener('click', () => {
    signOut(auth).then(() => {
      localStorage.clear();
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
