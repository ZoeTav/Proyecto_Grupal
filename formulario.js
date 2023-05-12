(function(){
    const formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    const validarNombre = function(e){
        if(formulario.nombre.value == 0){
            alert("Completa el campo nombre"),
            e.preventDefault();
        }
    }
    
    const validar = function(e){
        validarNombre(e);
    }

    formulario.addEventListener("submit",validar);

})
