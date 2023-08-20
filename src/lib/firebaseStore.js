/* eslint-disable no-console */
import {
  getFirestore,
  collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, arrayRemove, arrayUnion,
} from 'firebase/firestore';
import { db, auth } from './firebaseAuth';

const firestore = getFirestore();

export const addPost = async (userId, content) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      userId,
      content,
      likedBy: [],
      likeCounter: 0,
      timestamp: new Date(),
    });
    return docRef.id; // Devolver el ID del nuevo documento
  } catch (error) {
    console.error('Error adding post: ', error);
    throw error;
  }
};

export async function updateLikePost(userId) {
  const postRef = doc(db, 'posts', userId);
  const postDoc = await getDoc(postRef);
  const data = postDoc.data();
  console.log(data);
  if ((data.likedBy).includes(auth.currentUser.uid)) {
    await updateDoc(postRef, {
      likedBy: arrayRemove(auth.currentUser.uid),
      likeCounter: data.likeCounter - 1,
    });
  } else {
    await updateDoc(postRef, {
      likedBy: arrayUnion(auth.currentUser.uid),
      likeCounter: data.likeCounter + 1,
    });
  }
}

export const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const posts = querySnapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        ...data,
      };
    });

    return posts;
  } catch (error) {
    console.error('Error getting posts: ', error);
    throw error;
  }
};

export const getDataAuthor = (authorId) => {
  // Crea una referencia al documento del autor utilizando el ID del autor
  const authorRef = doc(firestore, 'authors', authorId);

  // Devuelve una nueva promesa
  return new Promise((resolve, reject) => {
    // Obtiene el documento del autor usando la referencia
    getDoc(authorRef)
      .then((authorDocument) => {
        // Resuelve la promesa con los datos del documento
        resolve(authorDocument.data());
      })
      .catch((error) => {
        // Rechaza la promesa con el error
        reject(error);
      });
  });
};

// ********Editar post**********
export const updatePost = async (postId, newContent) => {
  const postRef = doc(db, 'posts', postId);
  try {
    await updateDoc(postRef, {
      content: newContent,
      timestamp: new Date(),
    });
    console.log('publicacion actualizada');
  } catch (error) {
    console.error('error al actualizar publicacion', error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);
    console.log('Publicación eliminada');
  } catch (error) {
    console.error('Error al eliminar la publicación', error);
    throw error;
  }
};
