function conversacion() {
    var mensajes = document.getElementsByClassName("mensaje");
    mensajes[0].innerHTML = leerArchivo();
}
function leerArchivo() {
    var fs = require("fs");
    var text = fs.readFileSync("./Ejercicio2.txt");
    var textByLine = text.split("\n")
    console.log(textByLine)
    return text
}
    
