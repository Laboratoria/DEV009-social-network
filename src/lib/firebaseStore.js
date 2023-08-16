import {
  getFirestore,
  increment,
  collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { db } from './firebaseAuth';

const firestore = getFirestore();

export const addPost = async (userId, content) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      userId,
      content,
      liked_by: [],
      timestamp: new Date(),
    });
    return docRef.id; // Devolver el ID del nuevo documento
  } catch (error) {
    console.error('Error adding post: ', error);
    throw error;
  }
};

export async function updateLikePost(id) {
  const postRef = doc(db, 'posts', id);
  await updateDoc(postRef, {
    liked_by: increment(1),
  });
}

export const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    // eslint-disable-next-line no-shadow
    const posts = querySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
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
