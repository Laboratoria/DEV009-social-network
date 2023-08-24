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
  getDocs,
  updateProfile,
} from '../firebase/initializeFirebase.js';

// -- guardar Datos de usuario (se iran agregando a la coleccion de users) //
export const saveDataUser = async (Name, Email) => {
  await addDoc(collection(db, 'users'), {
    name: Name, // clave - parametro
    email: Email,
  });
};

// ----                   signin with new email                    --- //
export const registerUser = async (name, email, pass, callback) => {
  try {
    await createUserWithEmailAndPassword(auth, email, pass, name);
    saveDataUser(name, email);
    callback(true);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Este email ya está registrado');
    } else if (error.code === 'auth/invalid-email') {
      alert('Este email es inválido');
    }
    callback(false);
  }
};

// ----                   signin with google                    --- //
export const registerWithGoogle = async (callback) => {
  try {
    const result = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
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
export const createPostFn = async (post, name) => {
  try {
    const data = {
      content: post,
      author: name,
    };
    const docRef = await addDoc(collection(db, 'post'), data);
    console.log('Document written with ID: ', docRef.post);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

//  ---            leer datos almacenados en firebase        --  //
export const showData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'post'));
    const timeLineSection = document.querySelector('.timeLineSection');

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // const postId = doc.id;
      // const user = auth.currentUser;
      const postConteiner = document.createElement('div');
      postConteiner.classList.add('postConteiner');

      const userNamePic = document.createElement('div');
      userNamePic.classList.add('userNamePic');

      const userPicture = document.createElement('img');
      userPicture.classList.add('userPicture');
      userPicture.src = './img/perfil.png';

      const nickName = document.createElement('p');
      nickName.textContent = `${data.author}`;
      nickName.classList.add('nickName');

      const content = document.createElement('p');
      content.classList.add('content');
      content.textContent = data.content;
      userNamePic.append(userPicture, nickName);
      postConteiner.append(userNamePic, content);
      timeLineSection.appendChild(postConteiner);
    });
  } catch (e) {
    console.error('Error', e);
  }
};
