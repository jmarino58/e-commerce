let allValidated=false;
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid){
        input.style.borderColor="green";
        // input.parentElement.classList.remove("input--error");
        input.parentElement.querySelector(".input--error").innerHTML ="";
    }else{
        input.style.borderColor="red";
        //input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input--error").innerHTML =mostrarMensajeDeError(tipoDeInput,input);
    }

    const tipos = document.querySelectorAll("[data-tipo]");
    
    for (let tipo of tipos){
        if(tipo.validity.valid){
            allValidated=true;
        }else{
            allValidated=false;
        }
    }
    
    if (allValidated){   
     document.getElementById("formulario__contacto__enviar").disabled=false;
    }else{
     document.getElementById("formulario__contacto__enviar").disabled=true;
    }

    
}

const mensajesDeError= {
    nombre: {
        patternMismatch:"No puede superar los 40 caracteres",
        valueMissing:"Este campo no puede estar vacío"
    },
    email:{
        valueMissing: "Este campo no puede ser vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Este campo no puede ser vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12 caracteres, debe contener 1 letra minúscula, 1 mayúscula, 1 número y no puede contener caracteres especiales "
    },


    mensaje:{
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "No puede superar los 120 caracteres",

    },
       
}

const validadores={
    nacimiento: (input) => validarNacimiento(input),
    };

const tipoDeErrores = ["valueMissing","typeMismatch","patternMismatch","customError",];



function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje ="";
    tipoDeErrores.forEach( error => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    });
    return mensaje;
}















