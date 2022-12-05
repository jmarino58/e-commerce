function cargarImagen(){
    //const reader = new FileReader();
    const imagen = document.getElementById("producto__foto");
    const archivo = document.getElementById("producto__file");

    if (!archivo.files.length) return

    let file = archivo.files[0];
    let objetoURL=URL.createObjectURL(file);
    imagen.src=objetoURL;

};

   
    
    
    
    

    
    
    













    
    
    

