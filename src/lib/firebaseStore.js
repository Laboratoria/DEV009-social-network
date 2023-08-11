import {
  collection, addDoc, getDocs, doc, updateDoc, // querySnapshot
} from 'firebase/firestore';
import { db } from './firebaseAuth';

export const addPost = async (userId, content) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      userId,
      content,
      timestamp: new Date(),
    });
    return docRef.id; // Devolver el ID del nuevo documento
  } catch (error) {
    console.error('Error adding post: ', error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return posts;
  } catch (error) {
    console.error('Error getting posts: ', error);
    throw error;
  }
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
