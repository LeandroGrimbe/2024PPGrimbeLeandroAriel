class Vehiculo
{
    id;
    modelo;
    anioFabricacion;
    velMax;

    constructor(id, modelo, anioFabricacion, velMax)
    {
        this.id = id;
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.velMax = velMax;
    }
}

class Terrestre extends Vehiculo
{
    cantPuertas;
    cantRuedas;
    
    constructor(cantPuertas, cantRuedas, id, modelo, anioFabricacion, velMax)
    {
        super(id, modelo, anioFabricacion, velMax);
        this.cantPuertas = cantPuertas;
        this.cantRuedas = cantRuedas;
    }
}

class Aereo extends Vehiculo
{
    altMax;
    autonomia;

    constructor(altMax, autonomia, id, modelo, anioFabricacion, velMax)
    {
        super(id, modelo, anioFabricacion, velMax);
        this.altMax = altMax;
        this.autonomia = autonomia;
    }
}

function MostrarColumnas() {
    const columnas = 
    [
        { check: "checkID", col: "columnaID" },
        { check: "checkModelo", col: "columnaModelo" },
        { check: "checkAnioFabricacion", col: "columnaAnioFabricacion" },
        { check: "checkVelMax", col: "columnaVelMax" },
        { check: "checkCantPuertas", col: "columnaCantPuertas" },
        { check: "checkCantRuedas", col: "columnaCantRuedas" },
        { check: "checkAltMax", col: "columnaAltMax" },
        { check: "checkAutonomia", col: "columnaAutonomia" }
    ];

    columnas.forEach(({ check, col }) => {
        const checkBox = document.getElementById(check);
        const columna = document.getElementById(col);
        columna.style.display = "none";
        checkBox.addEventListener("change", function () {
            columna.style.display = checkBox.checked ? "table-cell" : "none";
        });
    });
}

function CargarDatosTabla()
{
    document.getElementById("ResultadoPromedio").value = "";

    var tabla = document.getElementById("salida-datos");
    tabla.innerHTML="";
    
    //reviso columnas chequeadas
    var id = 0;
    var modelo = 0;
    var anioFabricacion = 0;
    var velMax = 0;
    var cantPuertas = 0;
    var cantRuedas = 0;
    var altMax = 0;
    var autonomia = 0;

    let checkID = document.getElementById("checkID");
    if(checkID.checked)
    {
        id=1;
    }

    let checkModelo = document.getElementById("checkModelo");
    if(checkModelo.checked)
    {
        modelo=1;
    }

    let checkAnioFabricacion = document.getElementById("checkAnioFabricacion");
    if(checkAnioFabricacion.checked)
    {
        anioFabricacion=1;
    }

    let checkVelMax = document.getElementById("checkVelMax");
    if(checkVelMax.checked)
    {
        velMax=1;
    }

    let checkCantPuertas = document.getElementById("checkCantPuertas");
    if(checkCantPuertas.checked)
    {
        cantPuertas=1;
    }

    let checkCantRuedas = document.getElementById("checkCantRuedas");
    if(checkCantRuedas.checked)
    {
        cantRuedas=1;
    }

    let checkAltMax = document.getElementById("checkAltMax");
    if(checkAltMax.checked)
    {
        altMax=1;
    }

    let checkAutonomia = document.getElementById("checkAutonomia");
    if(checkAutonomia.checked)
    {
        autonomia=1;
    }

    switch(filtro.value)
    {
        case "Todos":
            listaVehiculos.forEach(vehiculo => {
                var filaDatos = tabla.insertRow();
                filaDatos.addEventListener("dblclick", (event) => {
                    DatosABM(vehiculo);
                });

                if(id == 1)
                {
                    var colum1 = filaDatos.insertCell();
                    colum1.innerHTML = vehiculo.id;
                }

                if(modelo == 1)
                {
                    var colum2 = filaDatos.insertCell();
                    colum2.innerHTML = vehiculo.modelo;
                }

                if(anioFabricacion == 1)
                {
                    var colum3 = filaDatos.insertCell();
                    colum3.innerHTML = vehiculo.anioFabricacion;
                }

                if(velMax == 1)
                {
                    var colum4 = filaDatos.insertCell();
                    colum4.innerHTML = vehiculo.velMax;
                }

                if(cantPuertas == 1)
                {
                    var colum5 = filaDatos.insertCell();
                    if(vehiculo.cantPuertas == null)
                    {
                        colum5.innerHTML = "NC";
                    }
                    else
                    {
                        colum5.innerHTML = vehiculo.cantPuertas;
                    }
                }

                if(cantRuedas == 1)
                {
                    var colum6 = filaDatos.insertCell();
                    if(vehiculo.cantRuedas == null)
                    {
                        colum6.innerHTML = "NC";
                    }
                    else
                    {
                        colum6.innerHTML = vehiculo.cantRuedas;
                    }
                }

                if(altMax == 1)
                {
                    var colum7 = filaDatos.insertCell();
                    if(vehiculo.altMax == null)
                    {
                        colum7.innerHTML = "NC";
                    }
                    else
                    {
                        colum7.innerHTML = vehiculo.altMax;
                    }
                }

                if(autonomia == 1)
                {
                    var colum8 = filaDatos.insertCell();
                    if(vehiculo.autonomia == null)
                    {
                        colum8.innerHTML = "NC";
                    }
                    else
                    {
                        colum8.innerHTML = vehiculo.autonomia;
                    }
                }
            });
            break;

        case "Terrestres":
            listaTerrestres.forEach(vehiculo => {
                var filaDatos = tabla.insertRow();
                filaDatos.addEventListener("dblclick", (event) => {
                    DatosABM(vehiculo);
                });

                if(id == 1)
                {
                    var colum1 = filaDatos.insertCell();
                    colum1.innerHTML = vehiculo.id;
                }

                if(modelo == 1)
                {
                    var colum2 = filaDatos.insertCell();
                    colum2.innerHTML = vehiculo.modelo;
                }

                if(anioFabricacion == 1)
                {
                    var colum3 = filaDatos.insertCell();
                    colum3.innerHTML = vehiculo.anioFabricacion;
                }

                if(velMax == 1)
                {
                    var colum4 = filaDatos.insertCell();
                    colum4.innerHTML = vehiculo.velMax;
                }

                if(cantPuertas == 1)
                {
                    var colum5 = filaDatos.insertCell();
                    colum5.innerHTML = vehiculo.cantPuertas;
                }

                if(cantRuedas == 1)
                {
                    var colum6 = filaDatos.insertCell();
                    colum6.innerHTML = vehiculo.cantRuedas;
                }

                if(altMax == 1)
                {
                    var colum7 = filaDatos.insertCell();
                    colum7.innerHTML = "NC";
                }

                if(autonomia == 1)
                {
                    var colum8 = filaDatos.insertCell();
                    colum8.innerHTML = "NC";
                }
            });
            break;
        
        case "Aereos":
            listaAereos.forEach(vehiculo => {
                var filaDatos = tabla.insertRow();
                filaDatos.addEventListener("dblclick", (event) => {
                    DatosABM(vehiculo);
                });

                if(id == 1)
                {
                    var colum1 = filaDatos.insertCell();
                    colum1.innerHTML = vehiculo.id;
                }

                if(modelo == 1)
                {
                    var colum2 = filaDatos.insertCell();
                    colum2.innerHTML = vehiculo.modelo;
                }

                if(anioFabricacion == 1)
                {
                    var colum3 = filaDatos.insertCell();
                    colum3.innerHTML = vehiculo.anioFabricacion;
                }

                if(velMax == 1)
                {
                    var colum4 = filaDatos.insertCell();
                    colum4.innerHTML = vehiculo.velMax;
                }

                if(cantPuertas == 1)
                {
                    var colum5 = filaDatos.insertCell();
                    colum5.innerHTML = "NC";
                }

                if(cantRuedas == 1)
                {
                    var colum6 = filaDatos.insertCell();
                    colum6.innerHTML = "NC";
                }

                if(altMax == 1)
                {
                    var colum7 = filaDatos.insertCell();
                    colum7.innerHTML = vehiculo.altMax;
                }

                if(autonomia == 1)
                {
                    var colum8 = filaDatos.insertCell();
                    colum8.innerHTML = vehiculo.autonomia;
                }
            });
            break;
    }
}

function CalcularPromedioVel()
{
    var cantidadVehiculos = 0;
    var totalVelMax = 0;
    switch(filtro.value)
    {
        case "Todos":
            listaVehiculos.forEach(vehiculo => {
                totalVelMax += vehiculo.velMax;
                cantidadVehiculos++;
            });
            break;

        case "Terrestres":
            listaTerrestres.forEach(vehiculo => {
                totalVelMax += vehiculo.velMax;
                cantidadVehiculos++;
            });
            break;

        case "Aereos":
            listaAereos.forEach(vehiculo => {
                totalVelMax += vehiculo.velMax;
                cantidadVehiculos++;
            });
            break;
    }

    var promedioVel = totalVelMax / cantidadVehiculos;
    var textPromedio = document.getElementById("ResultadoPromedio");
    textPromedio.value = promedioVel;
}

function MostrarABM()
{
    var formListado = document.getElementById("FormListado");
    formListado.style.display = "none";

    var formABM = document.getElementById("FormABM");
    formABM.style.display = "block";
}

function DatosABM(vehiculo)
{
    document.getElementById("idABM").value = vehiculo.id;
    document.getElementById("modeloABM").value = vehiculo.modelo;
    document.getElementById("anioFabricacionABM").value = vehiculo.anioFabricacion;
    document.getElementById("velMaxABM").value = vehiculo.velMax;

    if(vehiculo.cantPuertas != null)
    {
        document.getElementById("TiposVehiculoABM").selectedIndex = 1;

        document.getElementById("cantPuertasABM").value = vehiculo.cantPuertas;
        document.getElementById("cantRuedasABM").value = vehiculo.cantRuedas;

        document.getElementById("lblCantPuertasABM").style.display = "inline";
        document.getElementById("cantPuertasABM").style.display = "inline";
        document.getElementById("lblCantRuedasABM").style.display = "inline";
        document.getElementById("cantRuedasABM").style.display = "inline";
    }
    else
    {
        document.getElementById("TiposVehiculoABM").selectedIndex = 2;

        document.getElementById("altMaxABM").value = vehiculo.altMax;
        document.getElementById("autonomiaABM").value = vehiculo.autonomia;

        document.getElementById("lblAltMaxABM").style.display = "inline";
        document.getElementById("altMaxABM").style.display = "inline";
        document.getElementById("lblAutonomiaABM").style.display = "inline";
        document.getElementById("autonomiaABM").style.display = "inline";
    }

    document.getElementById("Modificar").style.display = "inline";

    MostrarABM();
}

function VolverAlListado()
{
    var formListado = document.getElementById("FormListado");
    formListado.style.display = "block";

    var formABM = document.getElementById("FormABM");
    formABM.style.display = "none";
    
    document.getElementById("idABM").value = "";
    document.getElementById("modeloABM").value = "";
    document.getElementById("anioFabricacionABM").value = "";
    document.getElementById("velMaxABM").value = "";
    document.getElementById("TiposVehiculoABM").value = "-";
    document.getElementById("cantPuertasABM").value = "";
    document.getElementById("cantRuedasABM").value = "";
    document.getElementById("altMaxABM").value = "";
    document.getElementById("autonomiaABM").value = "";

    document.getElementById("lblCantPuertasABM").style.display = "none";
    document.getElementById("cantPuertasABM").style.display = "none";
    document.getElementById("lblCantRuedasABM").style.display = "none";
    document.getElementById("cantRuedasABM").style.display = "none";

    document.getElementById("lblAltMaxABM").style.display = "none";
    document.getElementById("altMaxABM").style.display = "none";
    document.getElementById("lblAutonomiaABM").style.display = "none";
    document.getElementById("autonomiaABM").style.display = "none";

    document.getElementById("Modificar").style.display = "none";
}

function CrearVehiculo()
{
    var id = document.getElementById("idABM").value;
    if (id == null || id == "")
    {
        var modelo = document.getElementById("modeloABM").value;
        var anioFabricacion = document.getElementById("anioFabricacionABM").value;
        var velMax = document.getElementById("velMaxABM").value;
        var tipoVehiculo = document.getElementById("TiposVehiculoABM").value;
        var cantPuertas = document.getElementById("cantPuertasABM").value;
        var cantRuedas = document.getElementById("cantRuedasABM").value;
        var altMax = document.getElementById("altMaxABM").value;
        var autonomia = document.getElementById("autonomiaABM").value;

        
        var error = true;
        if(modelo != null && modelo != "" && anioFabricacion > 1885 && velMax > 0)
        {
            switch(tipoVehiculo)
            {
                case "Terrestre":
                    if(cantPuertas > -1 && cantRuedas > 0)
                    {
                        var id = CalcularID();
                        var nuevoTerrestre = new Terrestre(cantPuertas, cantRuedas, id, modelo, anioFabricacion, velMax);

                        listaTerrestres.push(nuevoTerrestre);
                        listaVehiculos.push(nuevoTerrestre);
                        error = false;
                    }
                    break;

                case "Aereo":
                    if(altMax > 0 && autonomia > 0)
                    {
                        var id = CalcularID();
                        var nuevoAereo = new Aereo(altMax, autonomia, id, modelo, anioFabricacion, velMax)

                        listaAereos.push(nuevoAereo);
                        listaVehiculos.push(nuevoAereo);
                        error = false;
                    }
                    break;
            }
        }

        if(error)
        {
            alert("Datos erroneos, reintente..");
        }
        else
        {
            alert("Datos cargados correctamente, volviendo al listado...");
            VolverAlListado();
            CargarDatosTabla();
        }
    }
    else
    {
        alert("ERROR, no se puede agregar vehiculo ya existente. No habras querido presionar -modificar-?");
    }
}

function CalcularID()
{
    idMax = 0;
    listaVehiculos.forEach(vehiculo => {
        if(vehiculo.id > idMax)
        {
            idMax = vehiculo.id;
        }
    });

    return idMax + 1;
}

function ModificarVehiculo()
{
    var modelo = document.getElementById("modeloABM").value;
    var anioFabricacion = document.getElementById("anioFabricacionABM").value;
    var velMax = document.getElementById("velMaxABM").value;
    var tipoVehiculo = document.getElementById("TiposVehiculoABM").value;
    var cantPuertas = document.getElementById("cantPuertasABM").value;
    var cantRuedas = document.getElementById("cantRuedasABM").value;
    var altMax = document.getElementById("altMaxABM").value;
    var autonomia = document.getElementById("autonomiaABM").value;

    var error = true;
    if(modelo != null && modelo != "" && anioFabricacion > 1885 && velMax > 0)
    {
        switch(tipoVehiculo)
        {
            case "Terrestre":
                if(cantPuertas > -1 && cantRuedas > 0)
                {
                    error = false;
                }
                break;

            case "Aereo":
                if(altMax > 0 && autonomia > 0)
                {
                    error = false;
                }
                break;
        }
    }

    if(error)
    {
        alert("Datos erroneos, no se realizaron cambios");
    }
    else
    {
        var id = document.getElementById("idABM").value;

        //actualizo listas
        for(var i=0; i<listaVehiculos.length; i++)
        {
            if(id == listaVehiculos[i].id)
            {
                listaVehiculos[i].modelo = modelo;
                listaVehiculos[i].anioFabricacion = anioFabricacion;
                listaVehiculos[i].velMax = velMax;

                if(listaVehiculos[i].cantPuertas != null)
                {
                    listaVehiculos[i].cantPuertas = cantPuertas;
                    listaVehiculos[i].cantRuedas = cantRuedas;
                    listaVehiculos[i].altMax = "NC";
                    listaVehiculos[i].autonomia = "NC";
                }
                else
                {
                    listaVehiculos[i].cantPuertas = "NC";
                    listaVehiculos[i].cantRuedas = "NC";
                    listaVehiculos[i].altMax = altMax;
                    listaVehiculos[i].autonomia = autonomia;
                }
                break;
            }
        }

        for(var i=0; i<listaTerrestres.length; i++)
        {
            if(id == listaTerrestres[i].id)
            {
                listaTerrestres[i].modelo = modelo;
                listaTerrestres[i].anioFabricacion = anioFabricacion;
                listaTerrestres[i].velMax = velMax;
                listaTerrestres[i].cantPuertas = cantPuertas;
                listaTerrestres[i].cantRuedas = cantRuedas;
                listaTerrestres[i].altMax = "NC";
                listaTerrestres[i].autonomia = "NC";
                break;
            }
        }

        for(var i=0; i<listaAereos.length; i++)
        {
            if(id == listaAereos[i].id)
            {
                listaAereos[i].modelo = modelo;
                listaAereos[i].anioFabricacion = anioFabricacion;
                listaAereos[i].velMax = velMax;
                listaAereos[i].cantPuertas = "NC";
                listaAereos[i].cantRuedas = "NC";
                listaAereos[i].altMax = altMax
                listaAereos[i].autonomia = autonomia;
                break;
            }
        }

        alert("Datos modificados correctamente, volviendo al listado...");
        VolverAlListado();
        CargarDatosTabla();
    }
}

function BorrarVehiculo()
{
    var idABorrar = document.getElementById("idABM").value;
    if(idABorrar != null && idABorrar > 0)
    {
        for(var i=0; i<listaVehiculos.length; i++)
        {
            if(idABorrar == listaVehiculos[i].id)
            {
                listaVehiculos.splice(i, 1);
                break;
            }
        }

        for(var i=0; i<listaTerrestres.length; i++)
        {
            if(idABorrar == listaTerrestres[i].id)
            {
                listaTerrestres.splice(i, 1);
                break;
            }
        }

        for(var i=0; i<listaAereos.length; i++)
        {
            if(idABorrar == listaAereos[i].id)
            {
                listaAereos.splice(i, 1);
                break;
            }
        }

        VolverAlListado();
        CargarDatosTabla();

        alert("Se ha borrado exitosamente el vehiculo asignado, volviendo al listado...");
    }
    else
        alert("No hay datos cargados para borrar");
}



var tiposABM = document.getElementById("TiposVehiculoABM");
tiposABM.addEventListener("change", function () {
    switch(tiposABM.value)
    {
        case "Terrestre":
            document.getElementById("lblAltMaxABM").style.display="none";
            document.getElementById("altMaxABM").style.display="none";
            document.getElementById("lblAutonomiaABM").style.display="none";
            document.getElementById("autonomiaABM").style.display="none";

            document.getElementById("lblCantPuertasABM").style.display="inline";
            document.getElementById("cantPuertasABM").style.display="inline";
            document.getElementById("lblCantRuedasABM").style.display="inline";
            document.getElementById("cantRuedasABM").style.display="inline";
            break
        
        case "Aereo":
            document.getElementById("lblAltMaxABM").style.display="inline";
            document.getElementById("altMaxABM").style.display="inline";
            document.getElementById("lblAutonomiaABM").style.display="inline";
            document.getElementById("autonomiaABM").style.display="inline";

            document.getElementById("lblCantPuertasABM").style.display="none";
            document.getElementById("cantPuertasABM").style.display="none";
            document.getElementById("lblCantRuedasABM").style.display="none";
            document.getElementById("cantRuedasABM").style.display="none";
            break;

        case "Neutro":
            document.getElementById("lblAltMaxABM").style.display="none";
            document.getElementById("altMaxABM").style.display="none";
            document.getElementById("lblAutonomiaABM").style.display="none";
            document.getElementById("autonomiaABM").style.display="none";

            document.getElementById("lblCantPuertasABM").style.display="none";
            document.getElementById("cantPuertasABM").style.display="none";
            document.getElementById("lblCantRuedasABM").style.display="none";
            document.getElementById("cantRuedasABM").style.display="none";
            break;
    }
});

var botonABM = document.getElementById("Agregar");
botonABM.addEventListener("click", MostrarABM);

var botonCancelar = document.getElementById("Cancelar");
botonCancelar.addEventListener("click", VolverAlListado);

var botonCalculo = document.getElementById("BotonCalculo");
botonCalculo.addEventListener("click", CalcularPromedioVel);

var botonCrear = document.getElementById("Crear");
botonCrear.addEventListener("click", CrearVehiculo);

var botonModificar = document.getElementById("Modificar");
botonModificar.addEventListener("click", ModificarVehiculo);

var botonEliminar = document.getElementById("Eliminar");
botonEliminar.addEventListener("click", BorrarVehiculo);

var filtro = document.getElementById("FiltrosCbo");
filtro.addEventListener("change", CargarDatosTabla);

var jsonVehiculos = '[{"id":14, "modelo":"Ferrari F100", "anioFabricacion":1998, "velMax":400, "cantPuertas":2, "cantRuedas":4},{"id":51, "modelo":"Dodge Viper", "anioFabricacion":1991, "velMax":266, "cantPuertas":2, "cantRuedas":4},{"id":67, "modelo":"Boeing CH-47 Chinook", "anioFabricacion":1962, "velMax":302, "altMax":6, "autonomia":1200},{"id":666, "modelo":"Aprilia RSV 1000 R", "anioFabricacion":2004, "velMax":280, "cantPuertas":0, "cantRuedas":2},{"id":872, "modelo":"Boeing 747-400", "anioFabricacion":1989, "velMax":988, "altMax":13, "autonomia":13450},{"id":742, "modelo":"Cessna CH-1 SkyhookR", "anioFabricacion":1953, "velMax":174, "altMax":3, "autonomia":870}]';
let listaVehiculos = JSON.parse(jsonVehiculos);

let listaTerrestres = [];
let listaAereos = [];
listaVehiculos.forEach(vehiculo => 
{
    if(vehiculo.cantPuertas > -1)
    {
        var nuevoTerrestre = new Terrestre(vehiculo.cantPuertas, vehiculo.cantRuedas, vehiculo.id, vehiculo.modelo, vehiculo.anioFabricacion, vehiculo.velMax);
        listaTerrestres.push(nuevoTerrestre);
    }
    else if (vehiculo.altMax > 0)
    {
        var nuevoAereo = new Aereo(vehiculo.altMax, vehiculo.autonomia, vehiculo.id, vehiculo.modelo, vehiculo.anioFabricacion, vehiculo.velMax);
        listaAereos.push(nuevoAereo);
    }
});

//recarga de tabla cada vez que se checkea una columna
document.querySelector('#checks').onclick = function(ev) {
    if(ev.target.value) {
        CargarDatosTabla();
    }
  }

MostrarColumnas();








