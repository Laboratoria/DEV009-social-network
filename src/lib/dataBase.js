<<<<<<< HEAD
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
=======
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
>>>>>>> main
import { app } from './firebase.js';
import { auth } from './index.js';

export const db = getFirestore(app);

export async function addRecipe(name, steps) {
  try {
    const docRef = await addDoc(collection(db, 'recetas'), {
      name,
      steps,
      user: auth.currentUser.email,
      likes: 0,
      usersLike: [],
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding recipe: ', error);
  }

  return null;
}
export async function fetchRecipe(recipeId) {
  const recipeRef = doc(db, 'recetas', recipeId);
  try {
    const docSnap = await getDoc(recipeRef);
    if (docSnap.exists()) {
      const recipeData = docSnap.data();
      return recipeData;
    }
  } catch (error) {
    console.error('Error o se encuentra la receta:', error);
  }
  return null;
}
export const querySnapshot = async () => {
  const result = [];
  const data = await getDocs(collection(db, 'recetas'));
  data.forEach((element) => {
    result.push({ id: element.id, ...element.data() });
  });
  return result;
};
export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'recetas', id));
};
export const editTextPost = async (id, data) => {
  await updateDoc(doc(db, 'recetas', id), { steps: data });
};
export const likePost = async (id) => {
  fetchRecipe(id)
    .then(async (data) => {
      let saveLikes = data.likes;
      const saveUsersLike = data.usersLike;
      const findUser = saveUsersLike.indexOf(auth.currentUser.email);
      saveUsersLike.splice(findUser);
      if (findUser !== -1) {
        await updateDoc(
          doc(db, 'recetas', id),
          {
            likes: saveLikes -= 1,
            usersLike: saveUsersLike,
          },
        );
      } else {
        saveUsersLike.push(
          auth.currentUser.email,
        );
        await updateDoc(
          doc(db, 'recetas', id),
          {
            likes: saveLikes += 1,
            usersLike: saveUsersLike,
          },
        );
      }
    })
    .catch((e) => {
      console.error('error save likes', e);
    });
};
