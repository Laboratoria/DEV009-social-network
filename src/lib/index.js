// Importaciones necesarias
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  updateProfile,
  provider,
  orderBy,
  addDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  collection,
  updateDoc,
  db,
  signInWithPopup,
} from '../firebase/initializeFirebase';

// Función para iniciar sesión de usuario
export const loginUser = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        alert('You are logged in!');
        resolve(user);
      } else {
        alert('Please verify your email address');
      }
    })
    .catch((err) => reject(err));
});

// Función para crear una cuenta con correo electrónico
export const createAccountWithEmail = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result);
      console.log(result.user);
      updateProfile(result.user, {
        displayName: name,
      }).then(() => {
        // Actualización de perfil
      });
      sendEmailVerification(result.user)
        .catch((err) => {
          console.error(err);
          alert('Error sending email');
        });

      signOut(auth);
      alert(`Hello ${name}, please complete the verification process`);
    })
    .catch((err) => {
      console.error(err);
      alert('Error creating an account');
    });
};

// Función para autenticar con Google
export const authWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      alert(`Hello ${result.user.displayName}! You're logged in with Google`);
    })
    .catch((err) => {
      console.error(err);
      alert(`Authentication error: ${err}`);
    });
};

// Función para cerrar sesión de usuario
export const signOutUser = () => {
  auth.signOut()
    .then(() => {
      console.log('User has logged out.');
    })
    .catch((err) => {
      console.error('Error logging out:', err);
    });
};

// Función para restablecer contraseña
export const resetPass = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
    })
    .catch((err) => {
      const errorMessage = err.message;
      console.log(errorMessage);
      alert(err);
    });
};

// Función para agregar un nuevo post
export const addPost = async (author, content, date) => {
  try {
    const postsCollection = collection(db, 'posts');
    await addDoc(postsCollection, {
      author,
      content,
      date,
    });
    console.log('Post added successfully to Firestore');
  } catch (error) {
    console.error('Error adding the post:', error);
  }
};

// Función para eliminar un post
export const deletePost = async (postRef) => {
  try {
    await deleteDoc(postRef);
    console.log('Post deleted successfully');
  } catch (error) {
    console.error('Error deleting the post:', error);
  }
};

// Función para mostrar los posts del usuario actual
export const displayUserPosts = async (user, containerElement) => {
  const postsQuery = query(collection(db, 'posts'), where('author', '==', user.displayName), orderBy('date', 'desc'));
  const postsSnapshot = await getDocs(postsQuery);

  containerElement.innerHTML = '';

  postsSnapshot.forEach((doc) => {
    const post = doc.data();
    const postElement = document.createElement('div');
    const isCurrentUserPost = post.author === user.displayName;
    const authorPhotoURL = isCurrentUserPost ? (user.photoURL || './img/person-circle.svg') : './img/person-circle.svg';
    postElement.classList.add('user-post');
    postElement.innerHTML = `
      <div class="post-author">
        <img src="${user.photoURL || './img/person-circle.svg'}" class="user-avatar" />
        ${post.author}
      </div>
      <div class="post-content">${post.content}</div>
      <img class="edit-post" src="./img/pencil.svg">
      <img class="delete-post" src="./img/trash.svg">
      <div class="post-date">${post.date.toDate().toLocaleDateString()}</div>
    `;
    const editButton = postElement.querySelector('.edit-post');
    if (editButton) {
      editButton.addEventListener('click', () => {
        if (isCurrentUserPost) {
          const editForm = document.createElement('div');
          editForm.innerHTML = `
            <div class='poster'>
              <div class ='container-post'>
                <header class="header-create-post">
                  <button class="exit-create-post">
                    <i class="fa-solid fa-circle-xmark" style="color: #7465D8;"></i>
                  </button>
                  <p class="title-create-post">Edit Post</p>
                  <button class="button-publish-post">Save</button>
                </header>
                <div class="new-post">
                  <div class="container-picture-user-name">
                    <div class="container-profile-picture-create">
                      <img src="${authorPhotoURL}" class="profile-picture-create-post">
                      <p class="user-name-create-post">${post.author}</p>
                    </div>
                  </div>
                  <textarea class="create-new-post edit-content">${post.content}</textarea>
                </div>
              </div>
            </div>
          `;

          const saveButton = editForm.querySelector('.button-publish-post');
          saveButton.addEventListener('click', async () => {
            const newContent = editForm.querySelector('.edit-content').value;
            try {
              await updateDoc(doc.ref, { content: newContent });
              post.content = newContent;
              const contentElement = postElement.querySelector('.post-content');
              contentElement.textContent = newContent;
              editForm.remove();
            } catch (error) {
              console.error('Error updating the post:', error);
            }
          });

          const exitButton = editForm.querySelector('.exit-create-post');
          exitButton.addEventListener('click', () => {
            editForm.remove();
          });

          postElement.appendChild(editForm);
        }
      });
    }
    const deleteButton = postElement.querySelector('.delete-post');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        if (isCurrentUserPost) {
          const customConfirmModal = document.querySelector('.modal');
          customConfirmModal.style.display = 'flex';

          const confirmButton = customConfirmModal.querySelector('.confirm-btn');
          const cancelButton = customConfirmModal.querySelector('.close-confirm');

          confirmButton.addEventListener('click', async () => {
            try {
              await deletePost(doc.ref);
              postElement.remove();
            } catch (error) {
              console.error('Error deleting the post:', error);
            } finally {
              customConfirmModal.style.display = 'none';
            }
          });

          cancelButton.addEventListener('click', () => {
            customConfirmModal.style.display = 'none';
          });
        }
      });
    }
    containerElement.appendChild(postElement);
  });
};

// Función para mostrar todos los posts al usuario
export const displayAllUserPosts = async (user, containerElement) => {
  const postsQuery = query(collection(db, 'posts'), orderBy('date', 'desc'));
  const postsSnapshot = await getDocs(postsQuery);

  containerElement.innerHTML = '';

  postsSnapshot.forEach((doc) => {
    const post = doc.data();
    const postElement = document.createElement('div');
    postElement.classList.add('user-post');

    const isCurrentUserPost = post.author === user.displayName;
    const authorPhotoURL = isCurrentUserPost ? (user.photoURL || './img/person-circle.svg') : './img/person-circle.svg';

    postElement.innerHTML = `
      <div class="post-author">
        <img src="${authorPhotoURL}" class="user-avatar" />
        ${post.author}
      </div>
      <div class="post-content">${post.content}</div>
      ${isCurrentUserPost ? '<img class="edit-post" src="./img/pencil.svg">' : ''}
      ${isCurrentUserPost ? '<img class="delete-post" src="./img/trash.svg">' : ''}
      <div class="post-date">${post.date.toDate().toLocaleDateString()}</div>
    `;

    const editButton = postElement.querySelector('.edit-post');
    if (editButton) {
      editButton.addEventListener('click', () => {
        if (isCurrentUserPost) {
          const editForm = document.createElement('div');
          editForm.innerHTML = `
            <div class='poster'>
              <div class ='container-post'>
                <header class="header-create-post">
                  <button class="exit-create-post">
                    <i class="fa-solid fa-circle-xmark" style="color: #7465D8;"></i>
                  </button>
                  <p class="title-create-post">Edit Post</p>
                  <button class="button-publish-post">Save</button>
                </header>
                <div class="new-post">
                  <div class="container-picture-user-name">
                    <div class="container-profile-picture-create">
                      <img src="${authorPhotoURL}" class="profile-picture-create-post">
                      <p class="user-name-create-post">${post.author}</p>
                    </div>
                  </div>
                  <textarea class="create-new-post edit-content">${post.content}</textarea>
                </div>
              </div>
            </div>
          `;

          const saveButton = editForm.querySelector('.button-publish-post');
          saveButton.addEventListener('click', async () => {
            const newContent = editForm.querySelector('.edit-content').value;
            try {
              await updateDoc(doc.ref, { content: newContent });
              post.content = newContent;
              const contentElement = postElement.querySelector('.post-content');
              contentElement.textContent = newContent;
              editForm.remove();
            } catch (error) {
              console.error('Error updating the post:', error);
            }
          });

          const exitButton = editForm.querySelector('.exit-create-post');
          exitButton.addEventListener('click', () => {
            editForm.remove();
          });

          postElement.appendChild(editForm);
        }
      });
    }

    const deleteButton = postElement.querySelector('.delete-post');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        if (isCurrentUserPost) {
          const customConfirmModal = document.querySelector('.modal');
          customConfirmModal.style.display = 'flex';

          const confirmButton = customConfirmModal.querySelector('.confirm-btn');
          const cancelButton = customConfirmModal.querySelector('.close-confirm');

          confirmButton.addEventListener('click', async () => {
            try {
              await deletePost(doc.ref);
              postElement.remove();
            } catch (error) {
              console.error('Error deleting the post:', error);
            } finally {
              customConfirmModal.style.display = 'none';
            }
          });

          cancelButton.addEventListener('click', () => {
            customConfirmModal.style.display = 'none';
          });
        }
      });
    }
    containerElement.appendChild(postElement);
  });
};
