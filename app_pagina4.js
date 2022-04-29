let tituloFecha = document.getElementById("fecha")
const dia = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const fecha = new Date()
function fechaActual() {
    dia[fecha.getDay()] === 'Miércoles','Viernes' ? tituloFecha.innerHTML = `<h1 class="h1">Hoy es ` + dia[fecha.getDay()] + ", hoy todas las entradas salen $300</h1>" : tituloFecha.innerHTML = `<h1 class="h1">Hoy es ` + dia[fecha.getDay()] + ", hoy las entradas 3D salen $500 y las 2D salen $400</h1>";
}
function cobrarEntradas(){
    let valorEntrada = document.miFormulario.sala.value
    let entradasTotales = document.miFormulario.cantEntradas.value
    let peliculaSeleccionada = document.miFormulario.pelicula.value
    if(dia[fecha.getDay()] === 'Miércoles', 'Viernes') {
        let totalEntradas = 300*entradasTotales;
        if (valorEntrada === "2D") {
           // alert(`Has seleccionado la sala ${valorEntrada}, reservaste una cantidad de ${entradasTotales} entrada/s y como estamos en ${dia[fecha.getDay()]}, tus entradas cuestan $300 cada una, total a pagar: AR$${totalEntradas}`)
           Swal.fire({
            icon: "success",
            title: "Reserva exitosa",
            text: `Pronto te enviaremos un link de pago a tu e-mail. Has seleccionado la película ${peliculaSeleccionada}, en la sala ${valorEntrada}, reservaste una cantidad de ${entradasTotales} entrada/s y como estamos en ${dia[fecha.getDay()]}, tus entradas cuestan $300 cada una, total a pagar: AR$${totalEntradas}`,
            confirmButtonText: "OK",
        })
        return(true)
        } else {
            //alert(`Has seleccionado la sala ${valorEntrada}, reservaste una cantidad de ${entradasTotales} entrada/s y como estamos en ${dia[fecha.getDay()]}, tus entradas cuestan $300 cada una, total a pagar: AR$${totalEntradas}`)
            Swal.fire({
                icon: "success",
                title: "Reserva exitosa",
                text: `Pronto te enviaremos un link de pago a tu e-mail. Has seleccionado la película ${peliculaSeleccionada}, en la sala ${valorEntrada}, reservaste una cantidad de ${entradasTotales} entrada/s y como estamos en ${dia[fecha.getDay()]}, tus entradas cuestan $300 cada una, total a pagar: AR$${totalEntradas}`,
                confirmButtonText: "OK",
            })
            return(true)
        }
    } else {
        if (valorEntrada === "2D"){
            totalEntradas = 400*entradasTotales;
            //alert(`Has seleccionado la sala ${valorEntrada}, reservaste una cantidad de ${entradasTotales} entrada/s y como estamos en ${dia[fecha.getDay()]}, tus entradas cuestan $400 cada una, total a pagar: AR$${totalEntradas}`)
            Swal.fire({
                icon: "success",
                title: "Reserva exitosa",
                text: `Pronto te enviaremos un link de pago a tu e-mail. Has seleccionado la película ${peliculaSeleccionada}, en la sala ${valorEntrada}, reservaste una cantidad de ${entradasTotales} entrada/s y como estamos en ${dia[fecha.getDay()]}, tus entradas cuestan $300 cada una, total a pagar: AR$${totalEntradas}`,
                confirmButtonText: "OK",
            })
            return(true)
        } else {
            totalEntradas = 500*entradasTotales;
            //alert(`Has seleccionado la sala ${valorEntrada}, reservaste una cantidad de ${entradasTotales} entrada/s y como estamos en ${dia[fecha.getDay()]}, tus entradas cuestan $500 cada una, total a pagar: AR$${totalEntradas}`)
            Swal.fire({
                icon: "success",
                title: "Reserva exitosa",
                text: `Pronto te enviaremos un link de pago a tu e-mail. Has seleccionado la película ${peliculaSeleccionada}, en la sala ${valorEntrada}, reservaste una cantidad de ${entradasTotales} entrada/s y como estamos en ${dia[fecha.getDay()]}, tus entradas cuestan $300 cada una, total a pagar: AR$${totalEntradas}`,
                confirmButtonText: "OK",
            })
        return(true)
        }
    }
}
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
    if (document.miFormulario.sala.value === "No seleccionaste tu sala") {
        // alert("Te ha faltado elegir tu película!")
        Swal.fire({
            icon: "error",
            title: "Operación incompleta",
            text: "Te ha faltado elegir tu sala!",
            confirmButtonText: "OK",
        })
        return false;
    }
    fetch("https://formsubmit.co/ajax/rodri.caceres.95@gmail.com", {
            method: "POST",
            body: new FormData(validar.target)
        })
            .then(res=>res.ok ? res.json(): Promise.reject(res))
            .then(json=>{
                console.log(json)
            })
            .catch(err=>{
                console.log(err)
            })
    return(true)
}

var Capturar = function(event){
    let datosCliente = document.getElementsByClassName("input"), guardarDatos = [];
    for (var i = 0; i <= datosCliente.length; i++){
        guardarDatos[i] = datosCliente[i];
        localStorage.setItem(datosCliente[i].id, JSON.stringify(datosCliente[i].value))
        datosCliente[i].value === "" ? console.log("Dato no ingresado") : console.log(datosCliente[i].value)
        event.preventDefault()
        
    }
    
}
let boton = document.getElementById("btn");
boton.addEventListener("click", cobrarEntradas)
boton.addEventListener("click", validar)
boton.addEventListener("click", Capturar)

fechaActual()