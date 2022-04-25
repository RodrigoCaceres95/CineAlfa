function validar(){
    if (document.miFormulario.Nombre.value === "") {
        Swal.fire({
            icon: "error",
            title: "Operación incompleta",
            text: "Te ha faltado rellenar tu nombre!",
            confirmButtonText: "OK",
        })
        //alert("Te ha faltado rellenar tu Nombre!")
        return false
    }
    if (document.miFormulario.Apellidos.value === "") {
        //alert("Te ha faltado rellenar tu/s Apellido/s!")
        Swal.fire({
            icon: "error",
            title: "Operación incompleta",
            text: "Te ha faltado rellenar tu/s Apellido/s!",
            confirmButtonText: "OK",
        })
        return false
    }
    if (document.miFormulario.email.value === "") {
        // alert("Te ha faltado rellenar tu email!")
        Swal.fire({
            icon: "error",
            title: "Operación incompleta",
            text: "Te ha faltado darnos tu email!",
            confirmButtonText: "OK",
        })
        return false
    }
    if (document.miFormulario.telefono.value === "") {
        // alert("Te ha faltado rellenar tu telefono!")
        Swal.fire({
            icon: "error",
            title: "Operación incompleta",
            text: "Te ha faltado darnos tu teléfono!",
            confirmButtonText: "OK",
        })
        return false
    }
    if (document.miFormulario.pelicula.value === "No seleccionaste tu película") {
        // alert("Te ha faltado elegir tu película!")
        Swal.fire({
            icon: "error",
            title: "Operación incompleta",
            text: "Te ha faltado elegir tu película!",
            confirmButtonText: "OK",
        })
        return false;
    }
    Swal.fire({
        icon: "success",
        title: "Reserva exitosa",
        text: "Enseguida te enviaremos un mail con el link de pago",
        confirmButtonText: "OK",
    })
    return(true)
}
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
boton.addEventListener("click", validar)
boton.addEventListener("click", Capturar)