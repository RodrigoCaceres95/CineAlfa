var Capturar = function(event){
    let datosCliente = document.getElementsByClassName("input"), guardarDatos = [];
    for (var i = 0; i <= datosCliente.length; i++){
        guardarDatos[i] = datosCliente[i];
        console.log(datosCliente[i].value)
        localStorage.setItem(datosCliente[i].id, JSON.stringify(datosCliente[i].value))
        event.preventDefault()
    }

}

let boton = document.getElementById("btn");
boton.addEventListener("click", Capturar)