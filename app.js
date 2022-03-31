//loop
// let pregunta = prompt("Te gusta el cine?")
// if (String (pregunta.toUpperCase()) == "SI"){
//     alert("Entraste al lugar indicado")
// } else {
//     alert("Este sitio no es para ti")
// }
// let respuesta = prompt("Que pelicula es tu favorita?")
// while (respuesta.toUpperCase() !="ESC") {
//     alert("Te gusta " + respuesta)
//     respuesta = prompt ("Ingresa otra pelicula que te guste...")
// }

//let respuesta = prompt("Que pelicula es tu favorita?")

//funciones con loop interactivo
function pregunta(respuesta) {
    switch (respuesta.toLowerCase()) {
        case "si": 
            return "Entraste al lugar indicado";
            break;
        case "obvio":
            return "Entraste al lugar indicado";
            break;
        default: 
            return "Esta pagina no es para vos";
            break;
}
}
let teGustaElCine = prompt("Te gusta el cine?");
alert(pregunta(teGustaElCine));

function peliculasFav() {
    var peliculas = [];
    var cont = "";
    for (var i = 0; i <= 2; i++) {
        var x = prompt("Ingresa una pelicula que te guste:");
        peliculas[i] = x + ;
    }
    for (var i = 0; i <= 2; i++) {
        cont += nombres[i] + " ";
    }
    alert("Las peliculas que te gustan son " + cont)
}

peliculasFav();

let generos = ["terror", "comedia", "romantico", 
                "accion", "superheroes", "thriller", 
                "suspenso", "drama", "tragico"]
function generoDeCine(genero){
    for (genero of generos) {
    confirm("¿Te gusta " + genero + "?")
    }
}
let genero = alert("Que genero te gusta?");
generoDeCine(genero)
