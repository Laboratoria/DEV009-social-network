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
} from '../firebase/initializeFirebase.js';

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
    if (user === doc.data().uid) { // Si el valor de la variable user es igual al valor de la propiedad uid del objeto data del documento actual, se ejecutará el bloque de código dentro del condicional.
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
// -- funcion para borrar post //
export const deletePost = async (postId) => {
 /* db.collection('post').doc(postId).delete().then(() => {
    console.log('documento borrado');
  }).catch((error) => {
    console.error('error al borrar', error);
  });*/

  try {
    await deleteDoc(doc(db, 'post', postId));
  }catch(error){
    console.log(error);
  }
};

//  ---            leer datos almacenados en firestore        --  //
export const showData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'post'));
    const timeLineSection = document.querySelector('.timeLineSection');

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const postId = doc.id;
      const user = auth.currentUser;
      console.log(postId);
      // const userN = userCredential.user;
      const postcontainer = document.createElement('div');
      postcontainer.classList.add('postcontainer');

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

      if (data.author === user.displayName || data.uid === user.uid) {
        const btnEdit = document.createElement('img');
        btnEdit.src = './icons/edit.svg';
        btnEdit.classList.add('btnEdit');

        const btnDelete = document.createElement('img');
        btnDelete.src = './icons/delete.svg';
        btnDelete.classList.add('btnDelete');

        btnDelete.addEventListener('click', deletePost, () => {
          // confirmación con modal //
          const confirmation = document.createElement('div');
          confirmation.classList.add('confirmation');
          confirmation.style.display = 'block';

          const textConfirmation = document.createElement('p');
          textConfirmation.classList.add('textConfirmation');
          textConfirmation.textContent = '¿Desea elminar el post?';

          const btnYes = document.createElement('button');
          btnYes.classList.add('btnYes');
          btnYes.textContent = 'Sí';
          btnYes.addEventListener('click', () => {
            deletePost(postId);
          });

          const btnNo = document.createElement('button');
          btnNo.classList.add('btnNo');
          btnNo.textContent = 'No';
          btnNo.addEventListener('click', () => {
            btnNo.style.display = 'none';
          });
          // cerrar el modal  //
          const closeModal = document.createElement('span');
          closeModal.classList.add('closeModal');
          closeModal.textContent = 'X';
          closeModal.addEventListener('click', () => {
            closeModal.style.display = 'none';
          });
          confirmation.append(textConfirmation, btnYes, btnNo, closeModal);
        });

        postcontainer.append(btnEdit, btnDelete);
      }

      userNamePic.append(userPicture, nickName);
      postcontainer.append(userNamePic, content);
      timeLineSection.appendChild(postcontainer);
      // console.log(data.author);
    });
  } catch (e) {
    console.error('Error', e);
  }
};

//  ---  función para leer publicaciones en el perfil   --- //
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
};
