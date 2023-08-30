/* eslint-disable no-alert */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import { GoogleAuthProvider } from 'firebase/auth';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  addDoc,
  collection,
  db,
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
  updateDoc,
  where,
  deleteDoc,
} from './initializeFirebase.js';

export const registerWithEmail = (email, password, username) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(userCredential.user, {
        displayName: username,
      });
      sendEmailVerification(userCredential.user);
      return user;
    });
};
export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return (token, user);
  });

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return (user);
    });
};

export const signOutSession = () => signOut(auth);

export async function createPost(username, titulo, ingredientes, preparacion, timestamp) {
  try {
    const data = {
      author: username,
      title: titulo,
      ingredients: ingredientes,
      preparation: preparacion,
      date: timestamp,
      likes: 0,
      likesArray: [],
    };
    const docPost = await addDoc(collection(db, 'Post'), data);
    console.log('Document written with ID: ', docPost.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Eliminar Post
export const deletePost = (postId) => deleteDoc(doc(db, 'Post', postId));

// Editar Post
export async function updatePost(postId, newData) {
  try {
    const postRef = doc(db, 'Post', postId);
    await updateDoc(postRef, newData);
    console.log('Post updated successfully');
  } catch (e) {
    console.error('Error updating post: ', e);
  }
}

export async function displayAllPosts() {
  try {
    const querySnapshot = await getDocs(query(collection(db, 'Post'), orderBy('date', 'desc')));
    const postsSection = document.querySelector('.sectionAllPostUsers');

    querySnapshot.forEach((file) => {
      const data = file.data();
      const postId = file.id;
      const user = auth.currentUser;

      const postDiv = document.createElement('div');
      postDiv.className = 'post';

      const headerUserInfo = document.createElement('header');
      headerUserInfo.className = 'headerUserInfo';

      const author = document.createElement('h1');
      author.textContent = `${data.author}`;
      author.className = 'author';

      const articlePostUsers = document.createElement('article');
      articlePostUsers.className = 'articlePostUsers';

      const title = document.createElement('h2');
      title.textContent = data.title;
      title.className = 'titlePost';

      const ingredients = document.createElement('p');
      ingredients.textContent = data.ingredients;
      ingredients.className = 'ingredients';

      const preparation = document.createElement('p');
      preparation.textContent = data.preparation;
      preparation.className = 'preparation';

      const footerEndPost = document.createElement('footer');
      footerEndPost.className = 'divBtnPost';

      const divReaction = document.createElement('div');
      divReaction.className = 'divReaction';

      const reaction = document.createElement('button');
      reaction.className = 'reactionButton';
      reaction.textContent = `${data.likes} 🧁`;

      headerUserInfo.append(author);
      divReaction.append(reaction);
      footerEndPost.append(divReaction);
      articlePostUsers.append(title, ingredients, preparation);
      postDiv.append(headerUserInfo, articlePostUsers, footerEndPost);
      postsSection.appendChild(postDiv);

      reaction.addEventListener('click', async () => {
        const postRef = doc(db, 'Post', postId);
        const postSnapshot = await getDoc(postRef);
        const postData = postSnapshot.data();

        const userId = user.uid;
        const likesArr = postData.likesArray || [];
        const userLikesPost = likesArr.includes(userId);

        try {
          if (userLikesPost) {
            const getIndexOfUser = likesArr.indexOf(userId);
            likesArr.splice(getIndexOfUser, 1);
          } else {
            likesArr.push(userId);
          }

          const newLikesCount = likesArr.length;

          await updateDoc(postRef, {
            likes: newLikesCount,
            likesArray: likesArr,
          });
          reaction.textContent = `${newLikesCount} 🧁`;
        } catch (error) {
          console.error('Error al actualizar:', error);
        }
      });
    });
  } catch (e) {
    console.error('Error al actualizar: ', e);
  }
}

export async function displayUserPosts(user) {
  try {
    if (user) {
      const querySnapshot = await getDocs(query(collection(db, 'Post'), where('author', '==', user.displayName), orderBy('date', 'desc')));
      const postsSection = document.querySelector('.sectionRecetasUser');

      querySnapshot.forEach((file) => {
        const data = file.data();
        const postId = file.id;

        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.setAttribute('data-post-id', postId);

        const headerUserInfo = document.createElement('header');
        headerUserInfo.className = 'headerUserInfo';

        const author = document.createElement('h1');
        author.textContent = `${data.author}`;
        author.className = 'author';

        const articlePostUsers = document.createElement('article');
        articlePostUsers.className = 'articlePostUsers';

        const title = document.createElement('h2');
        title.textContent = data.title;
        title.className = 'titlePost';

        const ingredients = document.createElement('p');
        ingredients.textContent = data.ingredients;
        ingredients.className = 'ingredients';

        const preparation = document.createElement('p');
        preparation.textContent = data.preparation;
        preparation.className = 'preparation';

        const footerEndPost = document.createElement('footer');
        footerEndPost.className = 'footerEndPost';

        const divReaction = document.createElement('div');
        divReaction.className = 'divReaction';

        const reaction = document.createElement('button');
        reaction.className = 'reactionButton';
        reaction.textContent = `${data.likes} 🧁`;
        reaction.addEventListener('click', async () => {
          const postRef = doc(db, 'Post', postId);
          const postSnapshot = await getDoc(postRef);
          const postData = postSnapshot.data();

          const userId = user.uid;
          const likesArr = postData.likesArray || [];
          const userLikesPost = likesArr.includes(userId);

          try {
            if (userLikesPost) {
              const getIndexOfUser = likesArr.indexOf(userId);
              likesArr.splice(getIndexOfUser, 1);
            } else {
              likesArr.push(userId);
            }

            const newLikesCount = likesArr.length;

            await updateDoc(postRef, {
              likes: newLikesCount,
              likesArray: likesArr,
            });
            reaction.textContent = `${newLikesCount} 🧁`;
          } catch (error) {
            console.error('Error updating likes:', error);
          }
        });

        const divDeleEdit = document.createElement('div');
        divDeleEdit.className = 'div-delete-edit';

        const modal = document.querySelector('.modal');

        const btnDeletePost = document.createElement('button');
        btnDeletePost.textContent = 'Borrar';
        btnDeletePost.className = 'btnDeletePost';
        btnDeletePost.addEventListener('click', () => {
          modal.style.display = 'block';

          const buttonDelete = document.querySelector('.modalConfirmation');
          buttonDelete.addEventListener('click', () => {
            deletePost(postId);
            postDiv.remove();
            modal.style.display = 'none';
          });

          const buttonCancel = document.querySelector('.modalCancel');
          buttonCancel.addEventListener('click', () => {
            modal.style.display = 'none';
          });
        });

        const btnEditPost = document.createElement('button');
        btnEditPost.textContent = 'Editar';
        btnEditPost.className = 'btnEditPost';
        btnEditPost.addEventListener('click', () => {
          const editBox = document.querySelector('.editBox');
          editBox.style.display = 'block';

          const editTitle = document.querySelector('.editTitle');
          const editTextIngredients = document.querySelector('.editIngredients');
          const editTextPreparation = document.querySelector('.editPreparation');

          editTitle.value = data.title;
          editTextIngredients.value = data.ingredients;
          editTextPreparation.value = data.preparation;

          const editForm = document.querySelector('.editForm');
          editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newTitle = editTitle.value;
            const newTextIngredients = editTextIngredients.value;
            const newTextPreparation = editTextPreparation.value;

            const newData = {
              title: newTitle,
              ingredients: newTextIngredients,
              preparation: newTextPreparation,
            };

            await updatePost(postId, newData);

            editBox.style.display = 'none';
            postsSection.innerHTML = '';
            await displayUserPosts(user);

            const cancelEdit = document.querySelector('.cancelEdit');
            cancelEdit.addEventListener('click', () => {
              editBox.style.display = 'none';
            });
          });
        });

        headerUserInfo.append(author);
        divReaction.append(reaction);
        divDeleEdit.append(btnEditPost, btnDeletePost);
        footerEndPost.append(divReaction, divDeleEdit);
        articlePostUsers.append(title, ingredients, preparation);
        postDiv.append(headerUserInfo, articlePostUsers, footerEndPost);
        postsSection.appendChild(postDiv);
      });
    }
  } catch (e) {
    console.error('Error al actualizar: ', e);
  }
}
