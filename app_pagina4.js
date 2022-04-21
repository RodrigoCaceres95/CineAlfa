var Capturar = function(event){
    let datosCliente = document.getElementsByClassName("input"), guardarDatos = [];
    for (var i = 0; i <= datosCliente.length; i++){
        guardarDatos[i] = datosCliente[i];
        localStorage.setItem(datosCliente[i].id, JSON.stringify(datosCliente[i].value))
        datosCliente[i].value === "" ? console.log("Debes completar datos!") : console.log(datosCliente[i].value)
        event.preventDefault()
    }

}

let boton = document.getElementById("btn");
boton.addEventListener("click", Capturar)