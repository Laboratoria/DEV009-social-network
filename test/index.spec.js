import {
  addPost, loginUser, signOutUser, authWithGoogle, createAccountWithEmail, deletePost,
} from '../src/lib/index';
import {
  collection, sendEmailVerification, signOut,
  addDoc, db, signInWithPopup, auth, provider,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, deleteDoc,
} from '../src/firebase/initializeFirebase';

jest.mock('../src/firebase/initializeFirebase');

describe('loginUser', () => {
  it('should log in and resolve user when email is verified', async () => {
    const mockUser = { emailVerified: true };
    signInWithEmailAndPassword.mockResolvedValue({ user: mockUser });

    const result = await loginUser('test@example.com', 'testpassword');
    expect(result).toBe(mockUser);
  });

  it('should resolve null when email is not verified', async () => {
    signInWithEmailAndPassword.mockResolvedValue({ user: { emailVerified: false } });

    const result = await loginUser('test@example.com', 'testpassword');
    expect(result).toBeNull();
  });

  it('should reject with an error when signInWithEmailAndPassword rejects', async () => {
    const mockError = new Error('Authentication failed');
    signInWithEmailAndPassword.mockRejectedValue(mockError);

    await expect(loginUser('test@example.com', 'testpassword')).rejects.toThrow(mockError);
  });
});

describe('createAccountWithEmail', () => {
  it('should create an account and set display name', async () => {
    createUserWithEmailAndPassword.mockResolvedValue({ user: { uid: 'user123' } });

    await createAccountWithEmail('John Doe', 'johndoe@example.com', 'securepassword123');

    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
    expect(updateProfile).toHaveBeenCalled();
    expect(sendEmailVerification).toHaveBeenCalled();
    expect(signOut).toHaveBeenCalled();
  });

  it('should handle sendEmailVerification error and throw', async () => {
    createUserWithEmailAndPassword.mockResolvedValue({ user: { uid: 'user456' } });
    sendEmailVerification.mockRejectedValue(new Error('Email verification failed'));

    await expect(createAccountWithEmail('Jane Smith', 'janesmith@example.com', 'strongpassword789')).rejects.toThrowError();
  });
});

describe('authWithGoogle', () => {
  it('Authenticate user with a Google account ', async () => {
    signInWithPopup.mockResolvedValue(auth, provider);
    await authWithGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });
  it('should handle authWithGooglen error and throw', async () => {
    signInWithPopup.mockRejectedValue(new Error('Account is already registered'));
    await expect(authWithGoogle()).rejects.toThrowError();
  });
});

describe('addPost function', () => {
  it('should add a post successfully', async () => {
    const mockCollection = jest.fn();
    collection.mockReturnValue(mockCollection);

    const author = 'Ana';
    const content = 'Hi, everybody!';
    const date = new Date();

    await addPost(author, content, date);

    expect(collection).toHaveBeenCalledWith(db, 'posts');
    expect(addDoc).toHaveBeenCalledWith(mockCollection, {
      author,
      content,
      date,
      likesArr: [],
      likesSum: 0,
    });
  });

  it('should handle error while adding a post', async () => {
    const mockCollection = jest.fn();
    collection.mockReturnValue(mockCollection);
    addDoc.mockRejectedValue(new Error('Some error'));
    const author = 'Jane';
    const content = 'Testing!';
    const date = new Date();
    await expect(addPost(author, content, date)).rejects.toThrowError('Some error');
    expect(collection).toHaveBeenCalledWith(db, 'posts');
    expect(addDoc).toHaveBeenCalledWith(mockCollection, {
      author,
      content,
      date,
      likesArr: [],
      likesSum: 0,
    });
  });
});

describe('deletePost function', () => {
  it('should delete a post successfully', async () => {
    const mockPostRef = jest.fn();
    await deletePost(mockPostRef);
    expect(deleteDoc).toHaveBeenCalledWith(mockPostRef);
  });
  it('should handle error when deleting a post', async () => {
    const mockPostRef = jest.fn();
    const mockError = new Error('Delete error');
    deleteDoc.mockRejectedValueOnce(mockError);
    await expect(deletePost(mockPostRef)).rejects.toEqual(mockError);
    expect(deleteDoc).toHaveBeenCalledWith(mockPostRef);
  });
});

describe('signOutUser', () => {
  it('SignOut user ', async () => {
    signOut.mockResolvedValue(auth, provider);
    await signOutUser();
    expect(signOut).toHaveBeenCalled();
  });
  it('should handle signOut error and throw', async () => {
    signOut.mockRejectedValue(new Error('Error while signing out user'));
    await expect(signOutUser()).rejects.toThrowError();
  });
});
