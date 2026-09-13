// 5 2da parte
const btn_generar_forms = document.getElementById("btn-generar-form");

btn_generar_forms.addEventListener("click", function(event) {
    const cantidad_participantes = document.getElementById("cantidadParticipantes").value;

    if(cantidad_participantes > 1 && cantidad_participantes <= 10 ){
        let contenedor = document.getElementsByTagName("form")[0];
        let botones_submit = document.getElementById("botones-submit");

        contenedor.innerHTML= ""; // Vaciar formulario para incluir cantidad indicada de secciones form
        let i;
        for(i = 0; i < cantidad_participantes; i++){

            let seccion_contenedora = document.createElement("section");
            seccion_contenedora.setAttribute("id", `datos_participante_${i}`); // ${i} identificador autoincremental para cada nueva seccion

            seccion_contenedora.innerHTML = `
                <h4 class="h5 fw-bold border-top border-3 border-secondary pt-3 pb-2">Datos participante ${i+1}</h4>
                <ul class="list-unstyled row gy-3 gx-5">
                    <li class="col-12 col-md-6">
                        <label for="nom_ap" class="form-label fw-semibold">Apellido y nombre: </label>
                        <input type="text" maxlength="100" id="nom_ap_${i+1}" class="form-control" name="nom_ap" placeholder="Max Verstappen" required>
                    </li>

                    <li class="col-12 col-md-6">
                        <label for="dni" class="form-label fw-semibold">DNI (sin puntos): </label>
                        <input type="number" id="dni_${i+1}" class="form-control" name="dni" placeholder="50.000.000" required>
                    </li>

                    <li class="col-12 col-md-6">
                        <label for="fec_nac" class="form-label fw-semibold">Fecha de nacimiento: </label>
                        <input type="date" id="fec_nac_${i+1}" class="form-control" name="fec_nac" required>
                    </li>

                    <li class="col-12 col-md-6">
                        <label for="email" class="form-label fw-semibold">Correo electrónico: </label>
                        <input type="email" id="email_${i+1}" class="form-control" name="email" placeholder="maxverstappen@gmail.com" size="25" required>
                    </li>

                    <li class="col-12 col-md-6">
                        <label for="telefono" class="form-label fw-semibold">Telefono: </label>
                        <input type="tel" id="telefono_${i+1}" class="form-control" name="telefono" placeholder="3834064060" required>
                    </li>

                    <li class="col-12 col-md-6">
                        <label class="form-label fw-semibold d-block">Sexo: </label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="femenino" name="sexo_${i+1}" value="F" required>
                            <label class="form-check-label" for="femenino">Femenino</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="masculino" name="sexo_${i+1}" value="M" checked required>
                            <label class="form-check-label" for="masculino">Masculino</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="nb" name="sexo_${i+1}" value="NB" required>
                            <label class="form-check-label" for="nb">No Binario</label>
                        </div>
                    </li>

                    <li class="col-12 col-md-6">
                        <label for="nivel" class="form-label fw-semibold d-block">Nivel: </label>
                        <select id="nivel_${i+1}" class="form-select">
                            <option value="inicial">Inicial</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="avanzado">Avanzado</option>
                        </select>
                    </li>

                    <li class="col-12 col-md-6">
                        <label for="exp" class="form-label fw-semibold d-block">¿Posee experiencia previa?</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="experiencia_${i+1}" id="exp_${i+1}" value="SI" checked required>
                            <label class="form-check-label" for="exp">Sí</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="experiencia_${i+1}" id="no_exp_${i+1}" value="NO" required>
                            <label class="form-check-label" for="no_exp">No</label>
                        </div>
                    </li>

                    <li class="col-12">
                        <label for="observaciones" class="form-label fw-semibold">Observaciones: </label><br>
                        <textarea id="observaciones_${i+1}" class="form-control" placeholder="Detalles a tener en cuenta acerca de la inscripcion..."></textarea>
                    </li>

                    <li class="col-12">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-control" id="condiciones_${i+1}" checked required>
                            <label for="condiciones" class="form-check-label">¿Acepta las condiciones de inscripción?</label>
                        </div>
                    </li>

                </ul>`;

            contenedor.appendChild(seccion_contenedora);
            }
        contenedor.appendChild(botones_submit); // incluir botones al final de los form
    }
    else if(cantidad_participantes > 10){
        alert("No se permite registrar mas de 10 participantes a la vez - Intente nuevamente");
        document.getElementById("cantidadParticipantes").value = ""; // vacia el input de cantidad de formularios a generar
    }
    else if(cantidad_participantes < 1) {
        alert("Numero ingresado NEGATIVO - Invalido");
        document.getElementById("cantidadParticipantes").value = "";
    }
})