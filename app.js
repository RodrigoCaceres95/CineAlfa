//loop
let pregunta = prompt("Te gusta el cine?")

if (String (pregunta.toUpperCase()) == "SI"){
    alert("Entraste al lugar indicado")
} else {
    alert("Este sitio no es para ti")
}
let respuesta = prompt("Que pelicula es tu favorita?")
while (respuesta.toUpperCase() !="ESC") {
    alert("Te gusta " + respuesta)
    respuesta = prompt ("Ingresa otra pelicula que te guste...")
}