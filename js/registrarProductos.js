import { productoServidor } from "./registrarProducto_Servicio.js";

const formulario = document.getElementById('producto__form');
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    //const imagenSrc = document.getElementById('producto__foto').src;
    const imagenSrc= JSON.stringify(document.getElementById('producto__foto').src);
    const nombre = document.getElementById('producto__nombre').value;
    const categoria = document.getElementById('producto__categoria').value;
    const precio = document.getElementById('producto__precio').value;
    const descripcion = document.getElementById('producto__descripcion').value;
    
    productoServidor.crearProducto(nombre,categoria,precio,descripcion,imagenSrc).then(respuesta => {

    }).catch(err =>(console.log(err)));
    cargaExitosaProducto();
}
);

