const listaProductos = () => fetch("http://localhost:3000/Productos").
then((respuesta)=>respuesta.json());

const crearProducto = (nombre,categoria,precio,descripcion,imagen)=>{
    return fetch("http://localhost:3000/Productos",{
         method:"POST",
         headers:{
             "Content-Type":"application/json"
         },
         body: JSON.stringify({nombre,categoria,precio,descripcion,imagen,id:uuid.v4()}),
 });
 }
 
 const eliminarProducto = (id)=> {
     return fetch(`http://localhost:3000/Productos/${id}`,{
         method:"DELETE"
     })
 }
 
 const detalleProducto = (id) => {
     return fetch (`http://localhost:3000/Productos/${id}`)
     .then((respuesta)=> respuesta.json());
 }

 const filtrarProductoXCategoria =(cadena)=>{
    return fetch("http://localhost:3000/Productos/?categoria="+cadena)
    .then((respuesta)=> respuesta.json());
 }
 
 const filtrarProductosXNombre =(cadena,cadena2)=>{
    return fetch("http://localhost:3000/Productos/?categoria="+cadena+"&nombre="+cadena2)
    .then((respuesta)=> respuesta.json());
 }
     
 
 export const productoServidor={
     listaProductos,
     crearProducto,
     eliminarProducto,
     detalleProducto,
     filtrarProductoXCategoria,
     filtrarProductosXNombre
     //     actualizarProducto,
 }
