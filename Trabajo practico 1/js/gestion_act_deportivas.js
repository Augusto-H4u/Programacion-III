// 3.1.
function Actividad(nombre, lugar, dia, horario, cupo, estado){
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;
}

Actividad.prototype.cambiar_estado = function (nuevo_estado){
    if(nuevo_estado === "disponible" || nuevo_estado === "completo") {
        if (this.estado !== nuevo_estado) {
            this.estado = nuevo_estado;
        } else {
            console.error("Nuevo estado similar al estado actual");
        }
    }
    else{
        console.error("Estado no permitido");
    }
}

// 3.2.
class SistemaDeportes{
    constructor() {
        this.actividades = [];
    }

    agregarActividad(actividad){
        if(actividad instanceof Actividad){
            this.actividades.push(actividad);
        }
        else{
            console.error("No es posible agregar - Actividad invalida");
        }
    }

    agregarActividades(...actividades){
        let act;
        for(act of actividades){
            if(act instanceof Actividad){
                this.actividades.push(act);
            }
        }
    }

    listar_actividades(){
        let act;
        for(act of this.actividades){
            console.log(act.nombre);
        }
    }
}

// 3.3
function crear_sistema(){
    let sistema_deportes1 = new SistemaDeportes();

    let futbol = new Actividad("Futbol", "Complejo Deportivo Universitario – Cancha de fútbol", "Lunes y miercoles", "18 - 20hs", 22, "disponible");
    let basquet = new Actividad("Basquet", "Polideportivo Universitario – Cancha 1", "Martes y jueves", "19 - 21hs", 15, "disponible");
    let voley = new Actividad("Voley", "Polideportivo Universitario – Cancha 2", "Lunes y viernes", "17 - 19hs", 18, "completo");
    let atletismo = new Actividad("Atletismo", "Pista de Atletismo Universitaria", "Martes y jueves", "18 - 20hs", 25, "disponible");

    sistema_deportes1.agregarActividades(futbol, basquet, voley, atletismo);

    //4 2da parte
    let tabla = document.getElementById("tablaActividades");

    let tabla_tbody = tabla.querySelector("tbody");

    let act;
    for(act of sistema_deportes1.actividades){
        let row = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.innerHTML = act.nombre;

        let tdLugar = document.createElement("td");
        tdLugar.innerHTML = act.lugar;

        let tdDia = document.createElement("td");
        tdDia.innerHTML = act.dia;

        let tdHorario = document.createElement("td");
        tdHorario.innerHTML = act.horario;

        let tdCupo = document.createElement("td");
        tdCupo.innerHTML = act.cupo;

        let tdEstado = document.createElement("td");
        tdEstado.innerHTML = act.estado;

        row.append(tdNombre, tdLugar, tdDia, tdHorario, tdCupo, tdEstado);

        tabla_tbody.appendChild(row);
    }
}

crear_sistema();








