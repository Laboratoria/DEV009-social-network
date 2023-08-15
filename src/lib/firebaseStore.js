import {
  collection, addDoc, getDocs, getDoc, doc, updateDoc, arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db, auth } from './firebaseAuth';
import { EmailAuthCredential } from 'firebase/auth';
import { auth, db } from './firebaseAuth';

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

export const updateLikePost = async (postRef, freshPost) => {
  const userRef = doc(db, 'users', auth.currentUser.uid);
  const userAlreadyLiked = freshPost.liked_by.find((lover) => lover.path === userRef.path);
  if (userAlreadyLiked) {
    await updateDoc(postRef, {
      liked_by: arrayRemove(userRef),
    });

    return './recursos/heart-regular.svg';
  }
  await updateDoc(postRef, {
    liked_by: arrayUnion(userRef),
  });
  return './recursos/heart-regular.svg';
};
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

export const getDataAuthor = (ref) => new Promise((resolve, reject) => {
  getDoc(ref).then((authorDocument) => {
    resolve(authorDocument.data());
  }).catch((error) => {
    reject(error);
  });
});

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
