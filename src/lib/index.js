// aqui exportaras las funciones que necesites
import { async } from 'regenerator-runtime';
import {
  createUserWithEmailAndPassword,
  auth,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  collection,
  addDoc,
  db,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc, 
} from '../firebase/initializeFirebase.js';
import { documentId } from 'firebase/firestore';

// -- guardar datos de usuario (se irán agregando a la coleccion de users) //
export const saveDataUser = async (Name, Email, Uid) => {
  await addDoc(collection(db, 'users'), {
    name: Name, // clave - parametro
    email: Email,
    uid: Uid,
  });
};

// ----                   signin with new email                    --- //
export const registerUser = async (name, email, pass, callback) => {
  createUserWithEmailAndPassword(auth, email, pass, name).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    saveDataUser(name, email, user.uid);
    callback(true);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (error.code === 'auth/email-already-in-use') {
      alert('Este email ya está registrado');
    } else if (error.code === 'auth/invalid-email') {
      alert('Este email es inválido');
    }
    callback(false);
  // ..
  });
};
//
// ----                   signin with google                    --- //
export const registerWithGoogle = async (callback) => {
  try {
    const result = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    saveDataUser(user.displayName, user.email, user.uid);
    callback(true);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    callback(false);
  }
};

// ----                   login                   --- //
export const loginUser = async (email, pass, callback) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    callback(true);
  } catch (error) {
    const errorCode = error.code;
    errorCode = alert('Usuario o contraseña incorrecta');
    callback(false);
  }
};

// ---           logOut            --- //
export const exitUser = async (callback) => {
  try {
    await signOut(auth);
    // alert('Vuelve pronto!');
    callback(true);
  } catch (error) {
    console.log(error);
    callback(false);
  }
};

// ---           crear post            --- //
export const createPostFn = (post) => {
  try {
    obtenerUsuario().then(user => {
      console.log(user);
      addDoc(collection(db, 'post'), {
        content: post,
        author: user,
        uid: auth.currentUser.uid,
      });
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
// obtener usuario logeado //
export async function obtenerUsuario() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  let userGetName = [];
  querySnapshot.forEach((doc) => {
    const user = auth.currentUser.uid;
    // console.log(user);
    if (user === doc.data().uid) { // Si el valor de la variable user es igual al valor de la
      // propiedad uid del objeto data del documento actual, se ejecutará el bloque de código
      // dentro del condicional.
    // The user object has basic properties such as display name, email, etc.
      // const displayName = user.displayName;
      // const email = user.email;
      // const emailVerified = user.emailVerified;
      userGetName.push(doc.data().name);
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      // const uid = user.uid;
      // La variable uid se asigna al valor de la propiedad uid del objeto user.
      // Esto significa que uid contendrá el identificador único del usuario actual.
    }
  });
  return userGetName.join('');
}
// -- función para borrar post //
export const deletePost = async (postId) => {
  const postIdAsString = String(postId); // lo convierte a cadena de texto
  try {
    await deleteDoc(doc(db, 'post', postIdAsString));
    postContainer.remove();
  }catch(error){
    console.log(error);
  }
};

// función para editar post //
export const editPost = async (postId, newData) => {
  const docRef = doc(db, 'post', postId);
  await updateDoc(docRef, newData);
}

//  ---            leer datos almacenados en firestore        --  //
export const showData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'post'));
    const timeLineSection = document.querySelector('.timeLineSection');
    const mainContainer = document.querySelector('.mainConteiner');

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const postId = doc.id;
      const user = auth.currentUser;
      // console.log(postId);
      // const userN = userCredential.user;
      const postContainer = document.createElement('div');
      postContainer.classList.add('postContainer');

      const userNamePic = document.createElement('div');
      userNamePic.classList.add('userNamePic');

      const userPicture = document.createElement('img');
      userPicture.classList.add('userPicture');
      userPicture.src = './img/perfil.png';
      userPicture.width = 30;
      userPicture.height = 30;

      const nickName = document.createElement('p');
      nickName.textContent = `${data.author}`;
      // console.log(obtenerUsuario());
      nickName.classList.add('nickName');

      const content = document.createElement('p');
      content.classList.add('content');
      content.textContent = data.content;

      //  Crear el modal para borrar publicación
      const confirmationModal = document.createElement('div');
      const modal = document.createElement('div');
      modal.style.display = 'none';
      modal.classList.add('modal');
      confirmationModal.classList.add('confirmation-modal');
      confirmationModal.style.display = 'none';
      // Crear elementos internos del modal
      const confirmationText = document.createElement('p');
      confirmationText.textContent = '¿Desea eliminar el post?';

      const confirmButton = document.createElement('button');
      confirmButton.textContent = 'Sí';
      confirmButton.addEventListener('click', async () => {
      await deletePost(postId); // Llamar a la función para eliminar el post
      confirmationModal.style.display = 'none'; // Cerrar el modal después de confirmar
      window.location.reload();
      });

      const cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancelar';
      cancelButton.addEventListener('click', () => {
      confirmationModal.style.display = 'none'; // Cerrar el modal si se cancela
      });

  // Agregar elementos al modal
  modal.append(confirmationText, confirmButton, cancelButton);
  confirmationModal.appendChild(modal);

  // Crear el modal para editar publicación
      const modalUpdate = document.createElement('div');
      modalUpdate.classList.add('modalUpdate');
      modalUpdate.style.display = 'none';
      const editModal = document.createElement('div');
      editModal.classList.add('editModal');
      editModal.style.display = 'none';

      const editForm = document.createElement('form');
      editForm.classList.add('editForm');

      const editTextArea = document.createElement('textarea');
      editTextArea.classList.add('editTextArea');
      editTextArea.value = data.content;

      const editButton = document.createElement('button');
      editButton.classList.add('editButton');
      editButton.textContent = 'Guardar post';

      editForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const postEdited = editTextArea.value;
        
        const newData = {
          content: postEdited,
        }
        await editPost(postId, newData);
        editModal.style.display = 'none';
        window.location.reload();
        await showData();
      })

      modalUpdate.append(editForm);
      editForm.append(editTextArea, editButton);
      editModal.appendChild(modalUpdate);

      userNamePic.append(userPicture, nickName);
      postContainer.append(userNamePic, content);
      timeLineSection.append(postContainer);
      mainContainer.append(confirmationModal, editModal);

      if (data.author === user.displayName || data.uid === user.uid) {
        const editAndDelete = document.createElement('div');
        editAndDelete.classList.add('editAndDelete');

        const btnEdit = document.createElement('img');
        btnEdit.src = './icons/edit.svg';
        btnEdit.classList.add('btnEdit');

        btnEdit.addEventListener('click', (e) => {
          e.preventDefault();
          editModal.style.display = 'grid';
          modalUpdate.style.display = 'grid';
        });

        const btnDelete = document.createElement('img');
        btnDelete.src = './icons/delete.svg';
        btnDelete.classList.add('btnDelete');

        btnDelete.addEventListener('click', (e) => {
          e.preventDefault();
          confirmationModal.style.display = 'grid';
          modal.style.display = 'grid';
        });
        editAndDelete.append(btnDelete, btnEdit);
        postContainer.append(editAndDelete);
      }

      // console.log(data.author);
    });
  } catch (e) {
    console.error('Error', e);
  }
};



/* //  ---  función para leer publicaciones en el perfil   --- //
export const readPostProfileUser = async () => {
  const user = auth.currentUser;
  console.log(user);

  if (user) {
    // const currentUid = user.uid;
    const querySnapshot = await getDocs(query(collection(db, 'post'), where('uid', '===', user.uid))); // Esta consulta busca documentos en la colección "cities" donde el campo "capital" sea igual a true.

    // const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      const data = doc.data();
      const userN = doc.id;
      // const user = auth.currentUser;
      // const userN = userCredential.user;

      const postcontainerUserProfile = document.querySelector('.profileSectionPost');

      const postcontainerUser = document.createElement('div');
      postcontainerUser.classList.add('postcontainerUser');

      const conteninerNameAndPicProfile = document.createElement('div');
      conteninerNameAndPicProfile.classList.add('conteninerNameAndPicProfile');

      const userPictureProfile = document.createElement('img');
      userPictureProfile.classList.add('userPicture');
      userPictureProfile.src = './img/perfil.png';
      userPictureProfile.width = 30;
      userPictureProfile.height = 30;

      const nickNameUserProfile = document.createElement('p');
      nickNameUserProfile.textContent = `${data.author}`;
      nickNameUserProfile.classList.add('nickNameUserProfile');

      const content = document.createElement('p');
      content.classList.add('content');
      content.textContent = data.content;

      conteninerNameAndPicProfile.append(userPictureProfile, nickNameUserProfile);
      postcontainerUser.append(conteninerNameAndPicProfile, content);
      postcontainerUserProfile.appendChild(postcontainerUser);
    });
  } else {
    console.log("Usuario no autenticado");
  }
}; */
