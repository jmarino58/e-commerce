const listaClientes = () => fetch("http://localhost:3000/Usuario").
then((respuesta)=>respuesta.json());

const login = (email,password) => fetch("http://localhost:3000/Usuario/",{
    method:'get',
    headers:{
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(json => {   
    let i=0;
    let login = false;
    while (i<json.length)
    {
      if (email==json[i].email && password==json[i].password)
      {
        
        login=true;
        
      }
      i++;
    }
    
    if (login){
        window.location.href="./productos.html";
    }else{
        alert("Usuario o contraseña incorrecta");
    }
})
.catch(error => console.error('Error:',error))
//.then(response => console.log('Success:',response));

const crearCliente = (nombre,email,password)=>{
   return fetch("http://localhost:3000/Usuario",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({nombre,email,password,id:uuid.v4()}),
});
}
/*
const eliminarCliente = (id)=> {
    return fetch(`http://localhost:5500/Usuario/${id}`,{
        method:"DELETE"
    })
}

const detalleCliente = (id) => {
    return fetch (`http://localhost:5500/Usuario/${id}`).then((respuesta)=> respuesta.json);
}

const actualizarCliente=(nombre,email,password,id)=>{
    return fetch (`http://localhost:5500/perfil/${id}`,{
    method: "PUT",
    headers: {
        "Content-Type":"application/json"
    },
    body:JSON.stringify({nombre,email,password}),
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
    };
*/    

export const clienteServidor={
    listaClientes,
    crearCliente,
    login
    //eliminarCliente,
    //detalleCliente,
    //actualizarCliente,
}

















