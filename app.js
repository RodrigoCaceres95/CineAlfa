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
    for (var i = 0; i <= 2; i++) {
        var x = prompt("Ingresa una pelicula que te guste:");
        peliculas[i] = x;
        x === "" && alert("No pusiste ninguna película!")
        alert("Las peliculas que te gustan son " + (peliculas[0] + ", " + peliculas[1] + " y " + peliculas[2]))
        textoCarteleras.innerHTML = `<h2>Porque te gustan: ${peliculas[0]}, ${peliculas[1]} y ${peliculas[2]}... te podemos recomendar nuestra Cartelera</h2>`
    }
    console.log(...peliculas)
}


peliculasFav();

