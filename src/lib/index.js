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
  getDocs,
  query,
  where,
  collection,
  updateDoc,
  db,
  signInWithPopup,
} from '../firebase/initializeFirebase';

export const loginUser = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        alert('You are logged!');
        resolve(user);
      } else {
        alert('Please verify your email address');
      }
    })
    .catch((err) => reject(err));
});

export const createAccountWithEmail = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result);
      console.log(result.user);
      updateProfile(result.user, {
        displayName: name,
      }).then(() => {
        // profile yupdate
      });
      sendEmailVerification(result.user)
        .catch((err) => {
          console.error(err);
          alert('Error sending email');
        });

      signOut(auth);
      alert(`Hola ${name}, please complete verification process`);
    })
    .catch((err) => {
      console.error(err);
      alert('Error creating account');
    });
};

export const authWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      alert(`Hello ${result.user.displayName}! you're logged in with Google`);
    })
    .catch((err) => {
      console.error(err);
      alert(`Authentication error: ${err}`);
    });
};

export const signOutUser = () => {
  auth.signOut()
    .then(() => {
      console.log('Usuario ha cerrado sesión.');
    })
    .catch((err) => {
      console.error('Error al cerrar sesión:', err);
    });
};

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

export const addPost = async (author, content, date) => {
  try {
    // Obtiene una referencia a la colección "posts" en Firestore
    const postsCollection = collection(db, 'posts');
    // Agrega un nuevo documento con los campos proporcionados
    await addDoc(postsCollection, {
      author,
      content,
      date,
    });
    console.log('Post agregado correctamente a Firestore');
  } catch (error) {
    console.error('Error al agregar el post:', error);
  }
};

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
              console.error('Error al actualizar el post:', error);
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
    containerElement.appendChild(postElement);
  });
};

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
              console.error('Error al actualizar el post:', error);
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
    containerElement.appendChild(postElement);
  });
};
