var texto = document.getElementById("texto");
texto.addEventListener("keyup", traducir, false);
function traducir(Event) {
    
    var cadena = texto.value; 
    var posicion = cadena.length - 1; 
    var letra=cadena.charAt(posicion); 
    cadena=cadena.toUpperCase(); 
    var codigoUnicode = cadena.charCodeAt(posicion); 
    if(codigoUnicode>=65&&codigoUnicode<=90){
        var chino = unescape("%u" + codigoUnicode + "e8"); 
        cadena = cadena.substring(0, cadena.length - 1); 
        cadena = cadena + chino; 
        texto.value = cadena;    
        var parrafo=document.createElement("p");
        var linea=document.createElement("hr");
        parrafo.innerHTML=" Tipo de evento keyup. <br> Propiedad keyCode: "+codigoUnicode+"<br> Caracter pulsado "+letra;
        document.getElementById("articulo").appendChild(parrafo);
        document.getElementById("articulo").appendChild(linea);
    }
    else{
        texto.value = cadena.substring(0, cadena.length - 1);
    };
}c