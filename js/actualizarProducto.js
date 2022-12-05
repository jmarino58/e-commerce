import { productoServidor } from "./registrarProducto_Servicio.js";

const formulario = document.querySelector('#producto__form');

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const nombre = document.querySelector('#producto__nombre');
    const categoria = document.querySelector('#producto__categoria');
    const precio =  document.querySelector('#producto__precio');
    const descripcion = document.querySelector('#producto__descripcion');
    const imagen = document.querySelector('#producto__foto');

    
    
    productoServidor.detalleProducto(id)
    .then((perfil)=> {
            nombre.value = perfil.nombre;
            categoria.value = perfil.categoria;
            precio.value = perfil.precio;
            descripcion.value = perfil.descripcion;
            imagen.src = perfil.imagen; 
    })
    
    
        //window.location.href="/screens/error.html"
    
};
obtenerInformacion();
