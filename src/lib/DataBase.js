
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from './firebase.js';

export const db = getFirestore(app);

export async function addRecipe(name, steps) {
  try {
    const docRef = await addDoc(collection(db, "recetas"), {
      name: name,
      Pasos: steps
    });

    console.log("Recipe added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding recipe: ", error);
  }
}
