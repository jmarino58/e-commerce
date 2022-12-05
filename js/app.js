import { valida } from "./validaciones.js";
import { clienteServidor } from "./registrarUsuario.js"
import { productoServidor } from "./registrarProducto_Servicio.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener('blur',(input) => {
        valida(input.target);
    });
});

document.querySelectorAll("textarea").forEach(input=>{
    input.addEventListener('blur',(input)=>{
        valida(input.target);
    })
})
if (document.getElementById("encabezado__registro")){
    document.getElementById("encabezado__registro").addEventListener('click',registrarUsuario);
}
function registrarUsuario(){
    location.href="../registraCliente.html"
}

/*
const formulario = document.querySelector('[data-form]');
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;
    clienteServidor.crearCliente(nombre,email,password).then(respuesta => {
        alert("Registro Completado");
        window.location.href="./index.html";
    }).cath(err=>(alert("Error verifique los datos ingresados y vuelva a intentarlo")))

})*/


const formularioAcceso = document.querySelector('[data-accesform]');
if(formularioAcceso){
    formularioAcceso.addEventListener("submit",(evento)=>{
        evento.preventDefault();
        const email = document.querySelector('[data-email]').value;
        const password = document.querySelector('[data-password]').value;
        clienteServidor.login(email,password)
    });
}
filtrarXCategoria();


export function filtrarXCategoria(){

    const crearLinea = (nombre,precio,descripcion,imagenSrc,id)=>{
        const linea = document.createElement("li");
        linea.classList.add("galeria__listaproductos__item");
        const contenido = `
        <label class="galeria__listaproductos__item--nombre">
        ${nombre}</label>
        
        <img src=${imagenSrc}>
        
        <label for="" class="galeria__listaproductos__item--precio">$ 
        ${precio}</label>
        <a class="galeria__listaproductos__item--descripcion">
        Ver producto
        </a>
        `
      linea.innerHTML=contenido;
      return linea;
    };


const categ = document.querySelectorAll(`section[id^="galeria"]`);
categ.forEach((categorias)=>{
//const seccion = document.querySelector(`.galeria__${categoria}`);
const table = categorias.querySelector(".galeria__listaproductos");
table.innerHTML="";
const cate = categorias.firstElementChild.className.split("__")[1];
  
productoServidor.filtrarProductoXCategoria(cate)
    .then((data)=>{
        data.forEach(({nombre,precio,descripcion,imagen,id,categoria}) => {
        
        const nuevaLinea = crearLinea(nombre,precio,descripcion,imagen,id,categoria);
        
        
            
        table.appendChild(nuevaLinea);
        
    });

    })
.catch((error) => alert("Ocurrio un error"));
});
}

