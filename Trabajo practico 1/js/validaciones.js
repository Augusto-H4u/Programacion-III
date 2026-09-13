function validar_fec_nac(){
    let nodo_form = document.querySelector("form");
    let fecha_nac = new Date(nodo_form.fec_nac.value); //Para que ambos sean tipo Date
    let fecha_actual = new Date();

    if(fecha_nac > fecha_actual) {
        alert("ERROR - La fecha de nacimiento no puede ser posterior a la fecha actual");
        location.reload(); // Recarga la pagina
        return false;
    }
    else {
        return true;
    }
}

function validar_dni(){
    let nodo_form = document.querySelector("form");
    let dni_longitud = nodo_form.dni.value.length;

    if(dni_longitud != 8 ){
        alert("ERROR - El DNI debe contener 8 dígitos");
        location.reload();
        return false;
    }
    else {
        return true;
    }
}