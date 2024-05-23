import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
export const registrarPersona = async(persona)=>{
    const docRef = await addDoc(collection(db, "personas"), persona);
}