import { productoServidor } from "./registrarProducto_Servicio.js";
import { filtrarXCategoria } from "./app.js";
document.getElementById("encabezado__buscador__imagen").addEventListener('click',filtrarProductosXNombre);

const crearNuevaLinea = (nombre,precio,descripcion,imagenSrc,id)=>{
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

function filtrarProductosXNombre(){
    const texto = document.querySelector('#txt_buscar').value
    const categ = document.querySelectorAll(`section[id^="galeria"]`);
    if (texto!=""){
    categ.forEach((categorias)=>{
        const table = categorias.querySelector(".galeria__listaproductos");
        table.innerHTML="";
        const cate = categorias.firstElementChild.className.split("__")[1];
    
    productoServidor.filtrarProductosXNombre(cate,texto)
    .then((data)=>{
        data.forEach(({nombre,precio,descripcion,imagen,id,categoria}) => {
        
        const nuevaLinea = crearNuevaLinea(nombre,precio,descripcion,imagen,id,categoria);
        //const seccion = document.querySelector(`.galeria__${categoria}`);
        table.appendChild(nuevaLinea);
        //seccionGeneral.appendChild(table);
    });
    
    })
    .catch((error) => alert("Ocurrio un error"));
    });
  }else{
    filtrarXCategoria();
  }
}
    










































