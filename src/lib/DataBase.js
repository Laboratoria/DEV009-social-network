
import { getFirestore, collection, addDoc,  doc, getDoc, getDocs, deleteDoc ,updateDoc } from "firebase/firestore";
import { app } from './firebase.js';
import { auth } from "./index.js"; 

export const db = getFirestore(app);

export async function addRecipe(name, steps) {
  try {
    const docRef = await addDoc(collection(db, "recetas"), {
      name: name,
      steps: steps,
      user: auth.currentUser.email,
      likes:0
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding recipe: ", error);
  }

};

export async function  fetchRecipe(recipeId){
  const recipeRef = doc(db, "recetas", recipeId);
  try{
  const docSnap = await getDoc(recipeRef);

  if (docSnap.exists()) {
    const recipeData = docSnap.data();
    return recipeData;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}catch (error) {
  console.error("Error o se encuentra la receta: ", error);
    return null;
}
}

export const querySnapshot = async ()=>{
  let result = [];
  const querySnapshot = await getDocs(collection(db, "recetas"));
  querySnapshot.forEach((doc) => {
    result.push({id:doc.id, ...doc.data()});
  });
  return result;
}

export const deletePost = async (id)=>{
 const result = await deleteDoc(doc(db, "recetas", id));
 console.log('delteeeeee',id, result);
}

export const editTextPost = async (id,data) => {
  await updateDoc(doc(db, "recetas", id), {steps:data});
};

export const likePost = async (id,cantLikes) => {
  await updateDoc(doc(db, "recetas", id), {likes: parseInt(cantLikes)+1});
};


/* const unsubscribe = onSnapshot(collection(db, "cities"), (data) => {
 console.log('aca',)
}); */
