import { db } from "./firebase.js";
import { addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
export const registrarPersona = async(persona)=>{
    const docRef = await addDoc(collection(db, "personas"), persona);
}

export const obtenerPersonas = async()=>{
    // Recupera la referencia (ruta)
    const ref = collection(db, "personas");
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc) => {
        //console.log(doc.id)
        console.log(doc.data())
        listado.push({...doc.data(),id:doc.id})
    });
    console.log(listado)
    return listado;
}