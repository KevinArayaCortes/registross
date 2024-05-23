import { registrarPersona } from "./promesa.js";
window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);

})

const registrar = ()=>{
    //recuperar elemento
    let eNombre = document.getElementById("nombre");
    //recupero valor de elemento
    let vNombre = eNombre.value;
    //crea un objeto con los datos recuperados
    let objeto = {nombre:vNombre}
    //envio a una funcion que registra
    console.log(objeto)
    registrarPersona(objeto);

}
