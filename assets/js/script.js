import { obtenerPersonas, registrarPersona } from "./promesa.js";
window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    cargarDatos();
})

const registrar = ()=>{
//recuperar elemento
let eNombre = document.getElementById("nombre");
let eApellido = document.getElementById("apellido");
let eRut = document.getElementById("rut");
let eCorreo = document.getElementById("correo");
let efdn = document.getElementById("fdn");
let eEdad = document.getElementById("edad");
//recupero valor de elemento
let vNombre = eNombre.value;
let vApellido= eApellido.value;
let vRut = eRut.value;
let vCorreo = eCorreo.value;
let vfdn = efdn.value;
let vEdad = eEdad.value;
//crea un objeto con los datos recuperados
let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,correo:vCorreo,fecha:vfdn,edad:vEdad}
//envio a una funcion que registra
registrarPersona(objeto).then(()=>{
alert("Se registro exitosamente");
cargarDatos();
}).catch((error)=>{
console.log(error)
});
}
const cargarDatos = ()=>{
    //Traer de las promesas todo lo registrado
    obtenerPersonas().then((personas)=>{
        console.log("HOLA")
        console.log(personas)
        //Cargarlo en la tabla del html
        let estructuras = ""
        personas.forEach((p)=>{
            estructuras += "<tr>"
            estructuras += "<td>"+p.nombre+"</td>"
            estructuras += "<td>"+p.apellido+"</td>"
            estructuras += "<td>"+p.rut+"</td>"
            estructuras += "<td>"+p.correo+"</td>"
            estructuras += "<td>"+p.edad+"</td>"
            estructuras += "<td>"+p.fecha+"</td>"
            estructuras += "<td><button id='UPD"+p.id+"'>Actualizar</button></td>"
            estructuras += "<td><button id='DEL"+p.id+"'>Eliminar</button></td>"
            estructuras += "</tr>";
        })
        document.getElementById("cuerpoTabla").innerHTML = estructuras;

        personas.forEach((p)=>{
            let elemento = document.getElementById("UPD"+p.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDapellido").value = p.apellido;
                document.getElementById("UPDrut").value = p.rut;
                document.getElementById("UPDcorreo").value = p.correo;
                document.getElementById("UPDedad").value = p.edad;
                document.getElementById("UPDfdn").value = p.fecha;
                document.getElementById("btnActualizar").value = p.id
            })
        })
    })
    
};