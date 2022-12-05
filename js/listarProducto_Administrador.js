import { productoServidor } from "./registrarProducto_Servicio.js";

const crearNuevaLinea = (nombre,precio,descripcion,imagenSrc,id)=>{
    const linea = document.createElement("li");
    linea.classList.add("galeria__listaproductos__item");
    const contenido = `
    <label class="galeria__listaproductos__item--nombre">
    ${nombre}</label>
    <div class="imagenes">
    <img src=${imagenSrc}>
    <div class="iconos">
    <i class="fa fa-trash" id=${id}></i><i class="fa fa-pencil" id=${id}></i>
    </div>
    </div>
    <label for="" class="galeria__listaproductos__item--precio">
    ${precio}</label>
    <a class="galeria__listaproductos__item--descripcion">
    ${descripcion}</a>
    `
  linea.innerHTML=contenido;
  const btnDelete = linea.querySelector(".fa-trash");
  btnDelete.addEventListener("click",()=> {
    const id = btnDelete.id;
    productoServidor
    .eliminarProducto(id)
    .then((respuesta)=> {
        console.log(respuesta);
    })
    .catch((err)=> alert ("Dio un error"));
    });
  
    const btnEdit = linea.querySelector(".fa-pencil");
    btnEdit.addEventListener("click",()=> {
      const id = btnEdit.id;
      productoServidor
      .detalleProducto(id)
      .then((respuesta)=> {
          location.href=`./actualizarProducto.html?id=${id}`
        //console.log(respuesta);
      })
      .catch((err)=> alert ("Dio un error"));
      });

 
 return linea;
};

const table = document.querySelector(".galeria__listaproductos");

productoServidor.listaProductos()
    .then((data)=>{
        data.forEach(({nombre,precio,descripcion,imagen,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,precio,descripcion,imagen,id);
        table.appendChild(nuevaLinea);
        
    });

    })
.catch((error) => alert("Ocurrio un error"));

