import { actualizarPersona, eliminarPersona, obtenerPersonas, registrarPersona } from "./promesa.js";
window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    cargarDatos();
    document.getElementById("btnActualizar").addEventListener("click",actualizar);
})

const registrar = ()=>{
//recuperar elemento
let eNombre = document.getElementById("nombre");
let eApellido = document.getElementById("apellido");
let eRut = document.getElementById("rut");
let eCorreo = document.getElementById("correo");
let efdn = document.getElementById("fdn");
let eEdad = document.getElementById("edad");
let egenero = document.querySelector('input[name="G"]:checked')
//recupero valor de elemento
let vNombre = eNombre.value;
let vApellido= eApellido.value;
let vRut = eRut.value;
let vCorreo = eCorreo.value;
let vfdn = efdn.value;
let vEdad = eEdad.value;
let vGenero = egenero.value;
//crea un objeto con los datos recuperados
let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,correo:vCorreo,fecha:vfdn,edad:vEdad,genero:vGenero}
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
            estructuras += "<td>"+p.genero+"</td>"
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
            });
            let btnEliminar = document.getElementById("DEL"+p.id);
            btnEliminar.addEventListener("click",()=>{
                if(confirm("Desea eliminar a:\n"+p.nombre+" "+p.apellido)){
                    console.log("Vamos a eliminar")
                    eliminarPersona(p.id).then(()=>{
                        alert("Eliminaste con exito");
                        cargarDatos();
                    }).catch((e)=>{
                        console.log(e)
                    })
                }else{
                    console.log("Cancelaste la")
                }
            })
        })
    })
};

const actualizar=()=>{
    //Recuperar los campos del formulario
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eRut = document.getElementById("rut");
    let eCorreo = document.getElementById("correo");
    let efdn = document.getElementById("fdn");
    let eEdad = document.getElementById("edad");
    let egenero = document.querySelector('input[name="G"]:checked')
    //recupero valor de elemento
    let vNombre = eNombre.value;
    let vApellido= eApellido.value;
    let vRut = eRut.value;
    let vCorreo = eCorreo.value;
    let vfdn = efdn.value;
    let vEdad = eEdad.value;
    let vGenero = egenero.value;
    //crea un objeto con los datos recuperados
    let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,correo:vCorreo,fecha:vfdn,edad:vEdad,genero:vGenero}

    let id = document.getElementById("btnActualizar").value
    //envio el objeto y el id a promesas
    document.getElementById("btnActualizar").disabled = "True";

    actualizarPersona(objeto,id).then(()=>{
        alert("Se actualiza con exito");
        cargarDatos();
    }).catch((e)=>{
        console.log(e)
    }).finally(()=>{
        document.getElementById("btnActualizar").disabled = "";
    })
};

