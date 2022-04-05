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
    var textoCarteleras = document.getElementById("carteleraJavascript");
    var peliculas = [];
    var cont = "";
    for (var i = 0; i <= 2; i++) {
        var x = prompt("Ingresa una pelicula que te guste:");
        peliculas[i] = x;
    }
    for (var i = 0; i <= 2; i++) {
        cont += peliculas[i] + " ";
    }
    alert("Las peliculas que te gustan son " + cont)

    textoCarteleras.innerHTML = `<h2>Porque te gustan: ${cont}... te podemos recomendar nuestra Cartelera</h2>` 
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
