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

    const validarRadio = function(e){
        if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){
        } else {
            alert("Completa el campo sexo.");
            e.preventDefault();
        }
    }

    const validarCalidad = function(e){
        if(formulario.uno.checked == true || formulario.dos.checked == true || formulario.tres.checked == true || formulario.cuatro.checked == true || formulario.cinco.checked == true){
        } else {
            alert("Califique la calidad de nuestros productos, por favor.")
            e.preventDefault();
        }

    }
    
    const validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarCalidad(e);
    }

    formulario.addEventListener("submit",validar);

})
