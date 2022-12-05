popup= document.getElementById("formcontato__send");

function openPopUp(){
    //window.location.href="./contacto_enviado.html";
    popup.classList.add("formcontato__send--open");
    let nombre =document.getElementById("formulario__contacto__nombre");
    let mensaje =document.getElementById("formulario__contacto__mensaje");
    nombre.value =" ";
    mensaje.value = " ";
}

function closePopUp(){
    popup.classList.remove("formcontato__send--open");
    //window.location.href="./index.html";
    
}

function mostrar(event){
    
    
    const menu = document.getElementById("menu__container");
    menu.style.display="block";
    setTimeout(() => { 
         menu.style.display="none"; }, 2000);
    }

function touchStart(evento){
    mostrar(evento)
    
    }

function openRegistro(){
    let register= document.getElementById("formulario__registro");
    register.classList.add("formregistro__send--open");
    let nombre =document.getElementById("formulario__registro__nombre");
    let email =document.getElementById("formulario__registro__email");
    let pass =document.getElementById("formulario__registro__password");
    nombre.value ="";
    email.value = "";
    pass.value = "";
    window.location.href="./index.html";
}

function cargaExitosaProducto(){
   let cargaProducto = document.getElementById("producto__form");

//    cargaProducto.classList.add("formregistro__send--open");
   document.getElementById('producto__descripcion').value="";  
   document.getElementById('producto__foto').src="./assets/perfil.png"
   document.getElementById('producto__file').value = "";
   document.getElementById('producto__nombre').value="";
   document.getElementById('producto__categoria').value="";
   document.getElementById('producto__precio').value="";
  

}






         



  

