// Import the functions you need from the SDKs you need
import { updateProfile } from 'firebase/auth';
import {
  auth, provider, createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword, db,
  doc, setDoc, getDoc, signOut, deleteDoc, updateDoc, addDoc,
  collection, getDocs, query,
} from './initializerFirebase.js';

// Guardar nuevo usuario
async function saveNewUser(idUser, Name, lastName, userName) {
  const dataUser = doc(db, 'users', `${idUser}`);
  await setDoc(dataUser, {
    username: userName,
    name: Name,
    lastname: lastName,
  });
}

// Registrar nuevo usuario
async function registerUser(email, password, name, lastname, userName) {
  try {
    const userId = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    saveNewUser(userId.user.uid, name, lastname, userName);
    updateProfile(userId.user, { displayName: `${userName}` });
    alert('registro exitoso');
    signOut(auth);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('El correo electronico ingresado esta asociado con un usuario existente');
    } else {
      alert(error.message);
    }
  }
}

// Guardar nueva publicacion
async function saveNewPost(userPost, id) {
  const docRef = await addDoc(collection(db, '/posts'), {
    post: userPost,
    idUser: id,
  });

  return docRef;
}

// Leer Post de usuario
async function readPostWhitRef(ref) {
  const docSnap = await getDoc(ref);
  return docSnap.data();
}

// Leer Datos de Nuevo Usuario
async function readDataWithIdUser(collectionName, documentName) {
  const documentRef = doc(db, collectionName, documentName);
  const docSnap = await getDoc(documentRef);
  const object = docSnap.data();
  return object;
}

// Leer todos los documentos de una coleccion
async function readCollectionData(collectionName) {
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

// iniciar Sesion
async function startSession(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      alert('El correo electronico ingresado no existe');
    } else if (error.code === 'auth/wrong-password') {
      alert('La contraseña es incorrecta');
    } else if (error.code === 'auth/invalid-email') {
      alert('Ingresa un correo');
    } else { alert('Escribe la contraseña'); }
  }
}

export const signInWithGoogle = () => {
  try {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  } catch (error) {
    throw error.message;
  }
};

export const signIn = () => {
  try {
    signInWithRedirect(auth, provider);
  } catch (error) {
    throw error.message;
  }
};

// borrar Post de usuario
async function deletePostWhitId(nameCollection, idElement) {
  await deleteDoc(doc(db, nameCollection, idElement));
}

// guardar cambios en la publicacion del usuario
async function updatePost(collectionName, idPost, textPost) {
  await updateDoc(doc(db, collectionName, idPost), { post: textPost });
}

export {
  updatePost,
  deletePostWhitId,
  registerUser,
  startSession,
  readDataWithIdUser,
  saveNewUser,
  saveNewPost,
  readPostWhitRef,
  readCollectionData,
};

// export const redirectGoogle = () => {
//   try {
//     getRedirectResult(auth)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;

//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   } catch (error) {
//     throw error.message;
//   }
// };
