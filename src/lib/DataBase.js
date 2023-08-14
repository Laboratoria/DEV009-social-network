
import { getFirestore, collection, addDoc,  doc, getDoc } from "firebase/firestore";
import { app } from './firebase.js';

export const db = getFirestore(app);

export async function addRecipe(name, steps) {
  try {
    const docRef = await addDoc(collection(db, "recetas"), {
      name: name,
      Pasos: steps
    });
    console.log("Recipe added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding recipe: ", error);
  }
}

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