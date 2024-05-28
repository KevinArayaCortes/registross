import { registrarPersona } from "./promesa.js";
window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
})

const registrar = ()=>{
//recuperar elemento
let eNombre = document.getElementById("nombre");
let eApellido = document.getElementById("apellido");
let eRut = document.getElementById("rut");
let eCorreo = document.getElementById("correo");
let ephone = document.getElementById("phone");
let eEdad = document.getElementById("edad");
//recupero valor de elemento
let vNombre = eNombre.value;
let vApellido= eApellido.value;
let vRut = eRut.value;
let vCorreo = eCorreo.value;
let vphone = ephone.value;
let vEdad = eEdad.value;
//crea un objeto con los datos recuperados
let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,correo:vCorreo,phone:vphone,edad:vEdad}
//envio a una funcion que registra
registrarPersona(objeto).then(()=>{
alert("Se registro exitosamente");
}).catch((error)=>{
console.log(error)
});
}
