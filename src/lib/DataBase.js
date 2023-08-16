
import { getFirestore, collection, addDoc,  doc, getDoc, getDocs } from "firebase/firestore";
import { app } from './firebase.js';
import { auth } from "./index.js"; 

export const db = getFirestore(app);

export async function addRecipe(name, steps) {
  try {
    const docRef = await addDoc(collection(db, "recetas"), {
      name: name,
      steps: steps,
      user: auth.currentUser.email
    });
    console.log("Recipe added with ID: ", docRef.id);
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
    console.log("Document data:", recipeData);
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

export const querySnapshot = await getDocs(collection(db, "recetas"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

